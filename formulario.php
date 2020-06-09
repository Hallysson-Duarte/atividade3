<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recebimento do Formulário</title>
</head>
<body>
    <?php
    $nome = $_POST['tNome'];
    $mail = $_POST['tMail'];
    $msg = $_POST['tMsg'];

    echo "Nome: " .$nome ." <br>";
    echo "E-mail:  " .$mail ." <br>";
    echo "Mensagem: " .$msg ." <br>";


    ?>
    
</body>
</html>