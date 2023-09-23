<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <title>Mon Portfolio</title>
  <link rel="stylesheet" href="css/style.css">

  <!-- Bootstrap Icon -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
</head>

<body>

  <!-- Header -->
  <?php include("layouts/header.php"); ?>
  
  <!-- Content -->
  <div class="background">
    <div class="matrix-text">
    </div>

    <div class="content">

      <!-- Profil -->
      <?php include("content/profil.php"); ?>
      
      <!-- Projets -->
      <?php include("content/projets.php"); ?>
    </div>
  </div>

  <!-- Footer -->
  <?php include("layouts/footer.php"); ?>

  <!-- Scripts -->
  <script src="js/navbar.js"></script>

  <script src="js/matrix.js"></script>
</body>

</html>