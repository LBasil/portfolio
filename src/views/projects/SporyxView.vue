<script setup lang="ts">
import { ref } from 'vue'
import BlogNavbar from '@/components/BlogNavbar.vue'
import BlogArticle from '@/components/BlogArticle.vue'
import AppFooter from '@/components/AppFooter.vue'

const lightboxSrc = ref('')
const lightboxVisible = ref(false)

function showImage(src: string) {
  lightboxSrc.value = src
  lightboxVisible.value = true
}
</script>

<template>
  <BlogNavbar />

  <div class="container py-5 mt-5">
    <h1 class="text-center mb-4">Sporyx</h1>
    <p class="text-center text-muted mb-5">
      Un jeu mobile 3D développé avec Godot. Suivez ici son évolution technique et créative.
    </p>

    <div class="text-center mt-5 mb-5">
      <a href="https://github.com/LBasil/sporyx" target="_blank" class="btn btn-outline-secondary">
        ← Lien vers le projet
      </a>
    </div>

    <section>
      <h2 class="mb-4">Journal de développement</h2>

      <div class="blog-timeline">

        <BlogArticle title="Déplacement 3D et vue plongeante dynamique" date="12 avril 2025">
          <p>
            Aujourd'hui, j'ai posé les bases du système de déplacement 3D du personnage, ainsi qu'une caméra dynamique
            en vue plongeante. Ces deux éléments sont essentiels car ils définissent à la fois le gameplay et la sensation
            de navigation dans l'univers suspendu de <strong>Base-X</strong>.
          </p>
          <p>
            Pour le déplacement, j'utilise un <code>CharacterBody3D</code> dans Godot. L'objectif était d'avoir un
            mouvement fluide, réactif, mais pas rigide. J'ai donc intégré une accélération avec <code>lerp</code> pour
            adoucir les transitions, et un système de rotation automatique du personnage dans la direction du mouvement :
          </p>
          <pre><code>velocity.x = lerp(velocity.x, direction.x * speed, acceleration * delta)
rotation.y = lerp_angle(rotation.y, atan2(velocity.x, velocity.z), 10.0 * delta)</code></pre>
          <p>
            Ce système permet de créer une vraie inertie dans le contrôle. La gravité est également gérée manuellement
            pour plus de contrôle, en particulier dans des environnements suspendus.
          </p>
          <p>
            Côté caméra, j'ai mis en place un script simple basé sur un <code>Camera3D</code> qui suit en temps réel le
            joueur grâce à une référence exportée <code>@export var target: Node3D</code> :
          </p>
          <pre><code>global_transform.origin = target.global_transform.origin + offset</code></pre>
        </BlogArticle>

        <BlogArticle title="Collisions précises avec les murs" date="13 avril 2025">
          <p>
            Aujourd'hui, j'ai implémenté un système de collision réaliste entre le joueur et les murs. Les murs sont
            modélisés avec des <code>MeshInstance3D</code> (des cubes pour le moment), et chaque mesh est accompagné
            d'un <code>CollisionShape3D</code> pour gérer les interactions physiques.
          </p>
          <p>
            En pratique, cela change radicalement la sensation de jeu : le joueur sent qu'il évolue dans un espace
            structuré, avec des limites claires et des contraintes à respecter.
          </p>
        </BlogArticle>

        <BlogArticle title="Essais multijoueur avec Godot" date="14 avril 2025">
          <p>
            J'ai commencé à expérimenter avec le multijoueur dans Godot pour mieux comprendre comment fonctionne leur
            système réseau intégré. J'ai mis en place une logique de client/serveur avec <code>ENetMultiplayerPeer</code>.
          </p>
          <h6>🧪 Architecture de base</h6>
          <pre><code>func start_server():
    var peer = ENetMultiplayerPeer.new()
    var error = peer.create_server(PORT, MAX_PLAYERS)
    if error:
        print("Erreur serveur : ", error)
        return
    multiplayer.multiplayer_peer = peer
    multiplayer.peer_connected.connect(_on_peer_connected)
    multiplayer.peer_disconnected.connect(_on_peer_disconnected)</code></pre>

          <h6>👾 Spawning & autorité</h6>
          <pre><code>func spawn_player(id):
    var player_scene = load("res://player.tscn")
    var player = player_scene.instantiate()
    player.name = str(id)
    player.set_multiplayer_authority(id)</code></pre>

          <h6>📡 Synchronisation et RPCs</h6>
          <pre><code>@rpc("any_peer", "call_remote")
func update_position(pos, rot):
    if multiplayer.get_unique_id() != get_multiplayer_authority():
        position = pos
        rotation = rot</code></pre>
        </BlogArticle>

        <BlogArticle title="Destruction & Rebuild de murs" date="15 avril 2025">
          <p>
            Nouvelle fonctionnalité testée : la possibilité de détruire un mur quand on vise dessus et qu'on est assez
            proche, puis de le reconstruire au même endroit avec une autre touche.
          </p>
          <h6>👁️ Détection du regard + distance</h6>
          <pre><code>func is_aimed_by_mouse() -> bool:
    var mouse_pos = get_viewport().get_mouse_position()
    var ray_origin = camera.project_ray_origin(mouse_pos)
    var ray_direction = camera.project_ray_normal(mouse_pos)
    var ray_end = ray_origin + ray_direction * 100.0
    var query = PhysicsRayQueryParameters3D.create(ray_origin, ray_end)
    query.collision_mask = 1
    var result = get_world_3d().direct_space_state.intersect_ray(query)
    return result and result.collider == self</code></pre>

          <h6>🧱 Fonctionnement</h6>
          <pre><code>func destroy_wall():
    hide()
    $WallCollision.disabled = true
    is_destroyed = true

func rebuild_wall():
    show()
    $WallCollision.disabled = false
    global_transform.origin = original_position
    is_destroyed = false</code></pre>
        </BlogArticle>

        <BlogArticle title="Ajout de l'inventaire et gestion de ressources" date="16 avril 2025">
          <p>
            Un système d'inventaire simple a été intégré. Le joueur peut désormais récupérer des ressources en
            détruisant certains éléments du décor, puis les réutiliser pour reconstruire ces mêmes éléments.
          </p>
          <pre><code>func destroy_wall():
    hide()
    $WallCollision.disabled = true
    is_destroyed = true
    player.add_resources(1)  # Donne 1 ressource au joueur

func rebuild_wall():
    if player.resources >= 1:  # Nécessite 1 ressource
        show()
        $WallCollision.disabled = false
        global_transform.origin = original_position
        is_destroyed = false
        player.resources -= 1</code></pre>
        </BlogArticle>

        <BlogArticle title="🌳 Ajout d'un arbre 3D destructible" date="18 avril 2025">
          <p>
            Extension naturelle du système de murs destructibles : j'ai ajouté un arbre 3D avec un <code>.obj</code> +
            <code>.mtl</code> en guise de mesh. L'arbre fonctionne comme un mur : il peut être détruit pour récolter
            des ressources (2 au total), et reconstruit si le joueur a au moins 1 ressource.
          </p>
          <p class="text-muted fst-italic">Vidéo de démonstration à venir.</p>
        </BlogArticle>

        <BlogArticle title="🧬 Virage de projet : de BaseX à Sporyx" date="22 avril 2025">
          <p>
            BaseX devait être un projet ambitieux mêlant construction, multijoueur et interactions complexes. Mais la
            densité de la tâche a clairement freiné la progression. J'ai décidé de prendre un virage stratégique pour
            concrétiser plus rapidement une version jouable.
          </p>
          <h6>📱 Sporyx : une version mobile plus light</h6>
          <ul>
            <li>🧭 Exploration de zones asynchrone</li>
            <li>⚔️ PVP asynchrone entre joueurs</li>
            <li>🧪 Mutations, spores, ressources et évolution</li>
          </ul>
          <blockquote class="blockquote mt-3">
            "Mieux vaut un petit jeu fini qu'un grand projet qui dort dans un dossier."
          </blockquote>
        </BlogArticle>

        <BlogArticle title="🚧 Premiers pas visuels sur Sporyx" date="23 avril 2025">
          <p>
            C'est officiel : Sporyx est lancé ! 🎉 Le tout premier prototype prend forme avec un menu simple et un
            personnage en 3D visible à gauche de l'écran.
          </p>
          <div class="row g-3 mb-3">
            <div v-for="n in [1, 2, 3]" :key="n" class="col-md-4">
              <img
                :src="`/images/proto${n}.png`"
                class="img-fluid rounded border"
                :alt="`Prototype Sporyx ${n}`"
                style="cursor:zoom-in;"
                @click="showImage(`/images/proto${n}.png`)"
              >
            </div>
          </div>
        </BlogArticle>

        <BlogArticle title="🖼️ Tests de fond dans Sporyx" date="24 avril 2025">
          <p>
            Petite session de test visuel aujourd'hui : j'ai essayé différents types de fond derrière le personnage
            principal.
          </p>
          <h6>🎨 Fond 2D</h6>
          <p>Premier test avec un fond 2D fixe. J'ai eu des soucis avec le personnage 3D passant parfois derrière.</p>
          <div class="text-center mb-3">
            <img src="/images/fond2d-test.png" class="img-fluid rounded border" alt="Test fond 2D"
              style="cursor:zoom-in; max-height: 300px;" @click="showImage('/images/fond2d-test.png')">
          </div>
          <h6>🌌 Fond 3D</h6>
          <p>Deuxième essai avec un environnement 3D très simple en arrière-plan.</p>
          <div class="text-center mb-3">
            <img src="/images/fond3d-test.png" class="img-fluid rounded border" alt="Test fond 3D"
              style="cursor:zoom-in; max-height: 300px;" @click="showImage('/images/fond3d-test.png')">
          </div>
        </BlogArticle>

        <BlogArticle title="🌀 Réflexion : Vers un Sporyx 100% 2D ?" date="24 avril 2025">
          <p>
            Petite pause conceptuelle aujourd'hui. Après plusieurs tests en 3D, je me pose sérieusement la question :
            est-ce que ça vaut vraiment le coup de continuer en 3D ?
          </p>
          <h6>🖌️ Pourquoi envisager la 2D ?</h6>
          <ul>
            <li>Plus simple à gérer techniquement (pas de souci de couches, de caméra ou de lumière).</li>
            <li>Meilleure performance sur des appareils mobiles moins puissants.</li>
            <li>Direction artistique plus cohérente si tout est 2D.</li>
          </ul>
        </BlogArticle>

        <BlogArticle title="🌐 Communication Godot ↔ Serveur Java (Ping → Pong)" date="29 avril 2025">
          <p>
            J'ai mis en place une communication simple entre <strong>Godot</strong> et un
            <strong>serveur Java local</strong>, pour poser les bases de futures interactions réseau.
          </p>
          <h6>🔧 Côté serveur (Java)</h6>
          <pre><code>ServerSocket serverSocket = new ServerSocket(8080);
Socket clientSocket = serverSocket.accept();
// Si GET /ping → répond "pong"</code></pre>
          <h6>🎮 Côté client (Godot)</h6>
          <pre><code>func send_ping_request():
    var http_request = HTTPRequest.new()
    add_child(http_request)
    http_request.request_completed.connect(_on_request_completed)
    http_request.request("http://localhost:8080/ping")

func _on_request_completed(result, response_code, headers, body):
    if response_code == 200:
        var response = body.get_string_from_utf8()
        arena_ui.update_response(response)</code></pre>
          <h6>🎥 Démo vidéo</h6>
          <div class="ratio ratio-16x9 mb-3">
            <video controls>
              <source :src="'/videos/test_server.mp4'" type="video/mp4" />
            </video>
          </div>
        </BlogArticle>

        <BlogArticle title="⚔️ Combat dynamique Godot ↔ Serveur Java" date="01 mai 2025">
          <p>
            Après le test de communication simple, j'ai enrichi la communication pour gérer un <strong>combat tour par
            tour</strong>, avec génération aléatoire de l'adversaire et <strong>log en direct du combat</strong>.
          </p>
          <h6>🧠 Simulation du combat (côté serveur)</h6>
          <pre><code>int opponentHp = playerHp + rand.nextInt(5) - 2;
int opponentAttack = playerAttack + rand.nextInt(3) - 1;

while (playerHp > 0 && opponentHp > 0) {
    if (rand.nextFloat() > 0.3) {
        int damage = playerAttack + rand.nextInt(3) - 1;
        opponentHp -= damage;
    }
    // puis l'adversaire attaque à son tour…
}

return (playerHp > 0) ? "Vous avez gagné !" : "Vous avez perdu !";</code></pre>
          <h6>📋 Exemple de log de combat</h6>
          <pre><code>Début du combat !
Joueur: HP=10, Attaque=3
Adversaire: HP=9, Attaque=2
---
Joueur inflige 2 dégâts ! Adversaire a 7 HP.
Adversaire inflige 3 dégâts ! Joueur a 7 HP.
Joueur rate son attaque !
...
Vous avez gagné !</code></pre>
        </BlogArticle>

        <BlogArticle title="🌍 Centralisation et Refactorisation de l'Exploration" date="04 mai 2025">
          <p>
            Aujourd'hui, nous avons fait évoluer Sporyx en centralisant toutes les données d'exploration côté serveur
            et en refactorisant le code Java pour le rendre plus modulaire et maintenable.
          </p>
          <h6>🔧 Côté serveur (Java) : Centralisation des données</h6>
          <pre><code>private static final Map&lt;String, World&gt; WORLDS = new HashMap&lt;&gt;();

private void initializeWorlds() {
    WORLDS.put("Mycelic Forest", new World("Mycelic Forest",
        "A lush forest filled with giant mushrooms and floating spores.",
        List.of("Giant Mushroom", "Floating Spore"),
        Map.of("Spores", 5, "Mushroom Cap", 2)));
}</code></pre>
          <h6>🧠 Refactorisation du serveur</h6>
          <pre><code>public class HttpServer {
    private final PlayerManager playerManager;
    private final CombatManager combatManager;
    private final ExplorationManager explorationManager;
}</code></pre>
          <h6>🎥 Démo vidéo</h6>
          <div class="ratio ratio-16x9 mb-3">
            <video controls>
              <source :src="'/videos/explore_and_pvp.mp4'" type="video/mp4" />
            </video>
          </div>
        </BlogArticle>

        <BlogArticle title="🏁 Fin de la démo Sporyx" date="07 mai 2025">
          <p>
            Après plusieurs semaines de développement intense, la démo technique de <strong>Sporyx</strong> touche à sa
            fin. Le projet a bien évolué : système de combat <strong>Godot ↔ Java</strong>, phases d'exploration,
            refactorisation serveur et intégration propre côté client.
          </p>
          <h6>✅ Ce qui a été accompli</h6>
          <ul>
            <li>Combat tour par tour entre Godot et serveur Java</li>
            <li>Exploration asynchrone avec génération procédurale d'événements</li>
            <li>Interface utilisateur dynamique pour afficher stats et logs</li>
            <li>Architecture côté serveur découpée en modules (combat, exploration, joueur)</li>
          </ul>
          <p>Merci d'avoir suivi ce petit bout de chemin. La graine a été plantée. 🌱</p>
        </BlogArticle>

      </div>
    </section>

    <div class="text-center mt-5">
      <router-link to="/" class="btn btn-outline-secondary">← Retour au portfolio</router-link>
    </div>
  </div>

  <!-- Lightbox -->
  <Teleport to="body">
    <div v-if="lightboxVisible" class="lightbox-overlay" @click="lightboxVisible = false">
      <img :src="lightboxSrc" class="lightbox-img" alt="Agrandissement">
    </div>
  </Teleport>

  <AppFooter />
</template>

<style scoped>
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-out;
}
.lightbox-img {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 8px;
}
</style>
