import {
	AfterViewInit,
	Component,
	ElementRef,
	HostListener,
	OnInit,
	ViewChild,
} from '@angular/core';
import * as THREE from 'three';
//@ts-ignore
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
//ts-ignore
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
//ts-ignore
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//@ts-ignore
import { BloomEffect, EffectComposer, EffectPass, RenderPass } from "postprocessing";
import { slideDown } from '../../animations';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [slideDown]
})
export class LandingComponent implements OnInit, AfterViewInit {
	public tiltAmount: string;
	@ViewChild('bg') bg: ElementRef<HTMLCanvasElement>;
	renderer: THREE.Renderer;
	camera: THREE.Camera;
	@HostListener('window:scroll',['$event'])
	handleScroll(event: any) {
			let scroll = window.scrollY;
			if (this.camera) {
				this.camera.position.z = 30 - (scroll / 50);
			}
	}
	@HostListener('window:resize',['$event'])
	handleResize(event: any) {
		this.renderer?.setSize(window.innerWidth, window.innerHeight);
	}

  constructor() { }
	  ngOnInit(): void {
    }

    ngAfterViewInit(): void {
		const scene = new THREE.Scene();
		let cameraRatio = Math.max( window.innerWidth / window.innerHeight, 1.5);
		cameraRatio = Math.min(cameraRatio, 1);
		const camera = new THREE.PerspectiveCamera(
			75,
			cameraRatio,
			0.1,
			20
		);
		this.camera = camera;
		camera.position.set(0,2,30);
		camera.view
		const renderer = new THREE.WebGL1Renderer({
			canvas: this.bg.nativeElement,
		});
		this.renderer = renderer;
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		const ambientLight = new THREE.AmbientLight(0xffffff);
		scene.add(ambientLight);
		scene.fog = new THREE.Fog(0x000000,10,15);
		scene.background = new THREE.Color(0x000000);
		const composer = new EffectComposer(renderer);
		composer.addPass(new RenderPass(scene,camera));
		const loader = new GLTFLoader();
		loader.load(
			'assets/grid-mobile.glb',
			function (gltf: any) {
				let grid = gltf.scene.children[0];
				scene.add(grid);
				function animate() {
					renderer.render(scene, camera);
					requestAnimationFrame(animate);
				}
				animate();
			},
			function (xhr: any) {},
		function (error: any) {}
		);
  }

}
