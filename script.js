const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let raindrops = [];
const rainCount = 100; // Número de gotas de chuva

// Classe para criar gotas de chuva
class Raindrop {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.length = Math.random() * 20 + 10; // Comprimento da gota
        this.speed = Math.random() * 3 + 2; // Velocidade da gota
    }

    fall() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = 0; // Reseta a gota quando ela sai da tela
            this.x = Math.random() * canvas.width; // Nova posição horizontal
        }
    }

    draw() {
        ctx.fillStyle = 'gold'; // Cor dourada
        ctx.fillRect(this.x, this.y, 2, this.length); // Desenha a gota
    }
}

// Cria as gotas de chuva
for (let i = 0; i < rainCount; i++) {
    raindrops.push(new Raindrop());
}

// Animação da chuva
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
    raindrops.forEach(drop => {
        drop.fall();
        drop.draw();
    });
    requestAnimationFrame(animate); // Chama a próxima animação
}

// Inicia a animação
animate();