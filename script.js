import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const components = [
    {
        name: "Résistance",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h4"></path><path d="M18 12h4"></path><path d="M6 12a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2 2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"></path></svg>',
        description: "La résistance est un composant passif qui s'oppose au passage du courant électrique. Elle est utilisée pour limiter le courant ou diviser la tension.",
        circuitImage: "https://www.elprocus.com/wp-content/uploads/resistor-Circuit-Diagram.jpg",
        modelPath: 'model/resistance/scene.gltf',
        position: new THREE.Vector3(0, 0, 0),
        scale: new THREE.Vector3(0.8, 0.8, 0.8)
    },
    {
        name: "Condensateur",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h6"></path><path d="M16 12h6"></path><path d="M8 6v12"></path><path d="M16 6v12"></path></svg>',
        description: "Le condensateur est un composant qui stocke l'énergie électrique sous forme de champ électrostatique. Il est utilisé pour le filtrage, le couplage ou le découplage.",
        circuitImage: "https://imgs.search.brave.com/f5o4LV538XwRZe4LgypP58Are9snmWlzXtOhhSMLwNE/rs:fit:860:0:0:0/g:ce/aHR0cDovL3d3dy5l/bGVrdHJvbmlxdWUu/ZnIvcHVibGljL2lt/Zy9jb21wb3NhbnQv/c2NoZW1hLWVsZWN0/cmlxdWUtcmVzaXN0/YW5jZS1jb25kZW5z/YXRldXIucG5n",
        modelPath: 'model/capacitor/capacitor.glb',
        position: new THREE.Vector3(0, 0, 0),
        scale: new THREE.Vector3(2, 2, 2)
    },
    {
        name: "Inductance",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h4"></path><path d="M18 12h4"></path><path d="M6 12a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2 2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"></path></svg>',
        description: "L'inductance, ou bobine, est un composant qui stocke l'énergie sous forme de champ magnétique. Elle est utilisée dans les filtres et les circuits oscillants.",
        circuitImage: "https://imgs.search.brave.com/GdLxGB6O7dXiQFTI6yO45oAG9E4bPhGngbe0cqz3NrM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHV0b3JpYWxzcG9p/bnQuY29tL2Jhc2lj/X2VsZWN0cm9uaWNz/L2ltYWdlcy9zZWxm/X2luZHVjdGFuY2Uu/anBn",
        modelPath: 'model/capacitor/capacitor.glb',
        position: new THREE.Vector3(0, 0, 0),
        scale: new THREE.Vector3(2, 2, 2)
    },
    {
        name: "Diode",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h5"></path><path d="M17 7v10"></path><path d="M17 12h5"></path><path d="M7 7l10 5-10 5V7z"></path></svg>',
        description: "La diode est un composant semi-conducteur qui ne laisse passer le courant que dans un sens. Elle est utilisée pour la rectification et la protection contre les inversions de polarité.",
        circuitImage: "https://imgs.search.brave.com/vsdDvfaT2WQcffrt_kqy7o_LzI0no2AjG96_OliW4HU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWxlY3Ryb25pY3No/dWIub3JnL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzEwL1Bo/b3RvZGlvZGUtQ2ly/Y3VpdC1Db25uZWN0/aW9uLmpwZw",
        modelPath: 'model/capacitor/capacitor.glb',
        position: new THREE.Vector3(0, 0, 0),
        scale: new THREE.Vector3(2, 2, 2)
    },
    {
        name: "Transistor NPN",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M2 12h5"></path> <path d="M17 7v10"></path> <path d="M17 12h5"></path> <path d="M7 7l5 5-5 5V7z"></path> </svg>',
        description: "Le transistor NPN est un composant semi-conducteur à trois bornes utilisé pour l'amplification ou la commutation de signaux électriques.",
        circuitImage: "https://imgs.search.brave.com/2jEzd_ioG2lEWpAvRWUyUtghukjAp4XxX09zOfmVq6I/rs:fit:860:0:0:0/g:ce/aHR0cDovL3d3dy5s/ZWFybmluZ2Fib3V0/ZWxlY3Ryb25pY3Mu/Y29tL2ltYWdlcy9Q/aG90b3RyYW5zaXN0/b3ItY2lyY3VpdC5w/bmc",
        modelPath: 'model/capacitor/capacitor.glb',
        position: new THREE.Vector3(0, 0, 0),
        scale: new THREE.Vector3(2, 2, 2)
    }
];

const componentList = document.getElementById('component-list');
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalCircuitImage = document.getElementById('modal-circuit-image');
const closeBtn = document.getElementsByClassName('close')[0];
const modelContainer = document.getElementById('model-container');

let scene, camera, renderer, currentModel;

const loader = new GLTFLoader();

function loadModel(component) {
    // Supprimer le modèle précédent s'il existe
    if (currentModel) {
        scene.remove(currentModel);
    }

    loader.load(component.modelPath, (gltf) => {
        const model = gltf.scene;
        model.position.copy(component.position);
        model.scale.copy(component.scale);
        scene.add(model);
        currentModel = model;
    }, undefined, (error) => {
        console.error('An error occurred while loading the model:', error);
        
    });
}

function initThreeJS() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, 300 / 300, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(300, 300);
    modelContainer.appendChild(renderer.domElement);

    camera.position.z = 5;

    // Ajout d'un éclairage
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);
}

function animate() {
    requestAnimationFrame(animate);

    if (currentModel) {
        currentModel.rotation.y += 0.01;
    }

    renderer.render(scene, camera);
}

components.forEach(component => {
    const li = document.createElement('li');
    li.innerHTML = `
        <div class="component-icon">${component.icon}</div>
        <strong>${component.name}</strong>
    `;
    li.addEventListener('click', () => showModal(component));
    componentList.appendChild(li);
});

function showModal(component) {
    modalTitle.textContent = component.name;
    modalDescription.textContent = component.description;
    modalCircuitImage.src = component.circuitImage;
    modalCircuitImage.alt = `Circuit d'exemple pour ${component.name}`;
    modal.style.display = 'block';
    setTimeout(() => {
        modalContent.classList.add('show');
    }, 10);

    if (!scene) {
        initThreeJS();
        animate();
    }

    loadModel(component);
}

closeBtn.onclick = function() {
    modalContent.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

window.onclick = function(event) {
    if (event.target == modal) {
        modalContent.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

// Animation des composants
const componentItems = document.querySelectorAll('#component-list li');
componentItems.forEach((item, index) => {
    item.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s both`;
});

// Animation de fond
const backgroundAnimation = document.querySelector('.background-animation');
setInterval(() => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const dot = document.createElement('div');
    dot.classList.add('background-dot');
    dot.style.left = `${x}%`;
    dot.style.top = `${y}%`;
    backgroundAnimation.appendChild(dot);
    setTimeout(() => {
        dot.remove();
    }, 2000);
}, 200);