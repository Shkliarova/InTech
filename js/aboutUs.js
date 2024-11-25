document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggle-bio");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const bioId = this.getAttribute("data-bio");
      const bioElement = document.getElementById(bioId);
      const teamMember = this.closest('.team-member'); 

      if (bioElement) {
        bioElement.classList.toggle("visually-hidden");

        if (bioElement.classList.contains("visually-hidden")) {
          this.textContent = "▼";
          teamMember.classList.remove("open"); 
        } else {
          this.textContent = "▲";
          teamMember.classList.add("open"); 
        }
      }
    });
  });
});
