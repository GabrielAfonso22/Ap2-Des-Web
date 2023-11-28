document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const inputSenha = document.querySelector("input[type='password']");
    const btnEntrar = document.querySelector("button");

    btnEntrar.addEventListener("click", function () {
      const senhaDigitada = inputSenha.value;

      if (senhaDigitada === "Fluzao") {
        window.location.href = "elenco_completo.html";
      } else {
        alert("Senha incorreta. Digite o time campeão da américa.");
      }
    });
  });

