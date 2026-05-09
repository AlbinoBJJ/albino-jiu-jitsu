document.addEventListener('DOMContentLoaded', () => {
    
    // --- Configuration ---
    const totalSpots = 10;
    const spotsTaken = 2; // Valor inicial simulado de preenchimento de vagas para criar prova social
    
    const progressBar = document.getElementById('progress-bar');
    const spotsCountDisplay = document.getElementById('spots-count');
    const urgencyText = document.getElementById('urgency-status'); 
    const subText = document.getElementById('sub-text');

    // --- Logic ---
    const percentage = (spotsTaken / totalSpots) * 100;
    
    setTimeout(() => {
        if(progressBar) {
            progressBar.style.width = percentage + '%';
        }
        
        // Animando a contagem de vagas preenchidas
        let current = 0;
        const interval = setInterval(() => {
            if (current >= spotsTaken) {
                clearInterval(interval);
                
                // Se atingir o máximo (10 de 10)
                if (spotsTaken >= totalSpots) {
                    handleFullState();
                }
            } else {
                current++;
                if(spotsCountDisplay) spotsCountDisplay.textContent = current;
            }
        }, 50);
    }, 500);

    function handleFullState() {
        if(progressBar) {
            progressBar.style.backgroundColor = '#28a745'; // Sucesso / Verde
        }

        if(urgencyText) {
            urgencyText.textContent = "ALCANCE MÁXIMO ATINGIDO!";
            urgencyText.classList.remove('text-warning');
            urgencyText.classList.add('text-success');
        }

        if(subText) {
            subText.innerHTML = "<strong>COMEMORAÇÃO:</strong> As vagas promocionais de fundador esgotaram! Entre em contato para a lista de espera.";
        }
    }

    // Scroll Animations para os Cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.lineage-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});