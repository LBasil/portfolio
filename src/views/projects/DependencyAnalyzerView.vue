<script setup lang="ts">
import BlogNavbar from '@/components/BlogNavbar.vue'
import BlogArticle from '@/components/BlogArticle.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <BlogNavbar />

  <div class="container py-5 mt-5">
    <h1 class="text-center mb-4">Analyse des dépendances</h1>
    <p class="text-center text-muted mb-5">
      Un projet mené en JS afin de suivre les potentiels régressions suite à un changement.
      Suivez ici son évolution technique et créative.
    </p>

    <div class="text-center mt-5 mb-5">
      <a href="https://github.com/LBasil/analyze-dependencies" target="_blank" class="btn btn-outline-secondary">
        ← Lien vers le projet
      </a>
    </div>

    <section>
      <h2 class="mb-4">Journal de développement</h2>

      <div class="blog-timeline">
        <BlogArticle title="Analyser les dépendances dans un projet" date="15 avril 2025">
          <p>
            Quand un projet grandit, il devient de plus en plus difficile de garder une trace claire des
            fichiers dont il dépend. L'analyse des dépendances permet de :
          </p>
          <ul>
            <li>Visualiser l'arborescence et les liens entre fichiers</li>
            <li>Détecter les ressources orphelines ou manquantes</li>
            <li>Éviter des bugs liés à des chemins obsolètes</li>
          </ul>

          <h6>🔎 Identifier les dépendances automatiquement</h6>
          <p>On scanne chaque fichier à la recherche de références à d'autres, par exemple avec :</p>
          <pre><code># En pseudo-code
search("load('res://") ➜ extraire les chemins de fichiers</code></pre>

          <p>On peut utiliser des regex simples ou une vraie analyse syntaxique (AST).</p>

          <h6>💡 Exemple simple en GDScript</h6>
          <pre><code>var regex = RegEx.new()
regex.compile("pre?load\\([\"'](res://[^\"']+)[\"']\\)")

func get_dependencies(file_path):
    var file = FileAccess.open(file_path, FileAccess.READ)
    var content = file.get_as_text()
    var matches = regex.search_all(content)
    return [match.get_string(1) for match in matches]</code></pre>

          <p>On détecte ici toutes les dépendances explicites via <code>load</code> ou <code>preload</code>.</p>

          <h6>⚠️ Détection des problèmes</h6>
          <pre><code>for path in deps:
    if not ResourceLoader.exists(path):
        print("⚠️ Ressource manquante :", path)</code></pre>

          <p>Utile pour prévenir les erreurs de runtime à cause de fichiers manquants.</p>

          <h6>📁 Étendre à tout le projet</h6>
          <pre><code>func get_all_gd_files(dir_path = "res://") -> Array:
    var results = []
    var dir = DirAccess.open(dir_path)
    dir.list_dir_begin()
    var name = dir.get_next()
    while name != "":
        if dir.current_is_dir():
            results += get_all_gd_files(dir_path + name + "/")
        elif name.ends_with(".gd"):
            results.append(dir_path + name)
        name = dir.get_next()
    dir.list_dir_end()
    return results</code></pre>

          <p>Et voilà : un scan complet, pour un graphe ou un rapport automatisé.</p>
          <p>➡️ Bref : une dépendance analysée, c'est un projet mieux maîtrisé !</p>
        </BlogArticle>
      </div>
    </section>

    <div class="text-center mt-5">
      <router-link to="/" class="btn btn-outline-secondary">← Retour au portfolio</router-link>
    </div>
  </div>

  <AppFooter />
</template>
