(function() {
	// find all navs
	// for each nav add event listener on nav-toggle, then modify is-active on it and on the nav-menu
	const navs = document.querySelectorAll('nav.nav');
})();




// class Vertex {
// 	constructor(x, y, z) {
// 		this.x = parseFloat(x);
// 		this.y = parseFloat(y);
// 		this.z = parseFloat(z);
// 	}
//
// 	project() {
// 		return {
// 			x: this.x,
// 			y: this.z
// 		};
// 	}
// }
//
// class Cube {
// 	constructor(center, side) {
// 		// Generate the vertices
// 		const d = side / 2;
//
// 		this.vertices = [
// 			new Vertex(center.x - d, center.y - d, center.z + d),
// 			new Vertex(center.x - d, center.y - d, center.z - d),
// 			new Vertex(center.x + d, center.y - d, center.z - d),
// 			new Vertex(center.x + d, center.y - d, center.z + d),
// 			new Vertex(center.x + d, center.y + d, center.z + d),
// 			new Vertex(center.x + d, center.y + d, center.z - d),
// 			new Vertex(center.x - d, center.y + d, center.z - d),
// 			new Vertex(center.x - d, center.y + d, center.z + d),
// 		];
//
// 		// Generate the faces
// 		this.faces = [
// 			[this.vertices[0], this.vertices[1], this.vertices[2], this.vertices[3]],
// 			[this.vertices[3], this.vertices[2], this.vertices[5], this.vertices[4]],
// 			[this.vertices[4], this.vertices[5], this.vertices[6], this.vertices[7]],
// 			[this.vertices[7], this.vertices[6], this.vertices[1], this.vertices[0]],
// 			[this.vertices[7], this.vertices[0], this.vertices[3], this.vertices[4]],
// 			[this.vertices[1], this.vertices[6], this.vertices[5], this.vertices[2]],
// 		];
// 	}
// }
//
// function render(objects, ctx, dx, dy) {
// 	// Clear the previous frame
// 	ctx.clearRect(0, 0, 2 * dx, 2 * dy);
//
// 	// For each object
// 	for (let object of objects) {
// 		// For each face
// 		for (let face of object.faces) {
//
// 			// Draw the first vertex
// 			let P = face[0].project();
// 			ctx.beginPath();
// 			ctx.moveTo(P.x + dx, -P.y + dy);
//
// 			// Draw the other vertices
// 			for (let k = 1; k < face.length; ++k) {
// 				P = face[k].project();
// 				ctx.lineTo(P.x + dx, -P.y + dy);
// 			}
//
// 			// Close the path and draw the face
// 			ctx.closePath();
// 			ctx.stroke();
// 			ctx.fill();
// 		}
// 	}
// }
//
// (function() {
// 	// Fix the canvas width and height
// 	const canvas = document.getElementById('cnv');
//
// 	if (canvas) {
// 		canvas.width = canvas.offsetWidth;
// 		canvas.height = canvas.offsetHeight;
// 		const dx = canvas.width / 2;
// 		const dy = canvas.height / 2;
//
// 		// Objects style
// 		const ctx = canvas.getContext('2d');
// 		ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
// 		ctx.fillStyle = 'rgba(0, 150, 255, 0.3)';
//
// 		// Create the cube
// 		const cube_center = new Vertex(0, 11 * dy / 10, 0);
// 		const cube = new Cube(cube_center, dy);
// 		const objects = [cube];
//
// 		// First render
// 		render(objects, ctx, dx, dy);
//
// 		// Events
// 		let mousedown = false;
// 		let mx = 0;
// 		let my = 0;
//
// 		canvas.addEventListener('mousedown', initMove);
// 		document.addEventListener('mousemove', move);
// 		document.addEventListener('mouseup', stopMove);
//
// 		// Rotate a vertice
// 		function rotate(M, center, theta, phi) {
// 			// Rotation matrix coefficients
// 			const ct = Math.cos(theta);
// 			const st = Math.sin(theta);
// 			const cp = Math.cos(phi);
// 			const sp = Math.sin(phi);
//
// 			// Rotation
// 			const x = M.x - center.x;
// 			const y = M.y - center.y;
// 			const z = M.z - center.z;
//
// 			M.x = ct * x - st * cp * y + st * sp * z + center.x;
// 			M.y = st * x + ct * cp * y - ct * sp * z + center.y;
// 			M.z = sp * y + cp * z + center.z;
// 		}
//
// 		// Initialize the movement
// 		function initMove(evt) {
// 			clearTimeout(autorotate_timeout);
// 			mousedown = true;
// 			mx = evt.clientX;
// 			my = evt.clientY;
// 		}
//
// 		function move(evt) {
// 			if (mousedown) {
// 				let theta = (evt.clientX - mx) * Math.PI / 360;
// 				let phi = (evt.clientY - my) * Math.PI / 180;
//
// 				for (let vertex of cube.vertices) {
// 					rotate(vertex, cube_center, theta, phi);
// 				}
//
// 				mx = evt.clientX;
// 				my = evt.clientY;
//
// 				render(objects, ctx, dx, dy);
// 			}
// 		}
//
// 		function stopMove() {
// 			mousedown = false;
// 			autorotate_timeout = setTimeout(autorotate, 1500);
// 		}
//
// 		function autorotate() {
// 			for (let vertex of cube.vertices) {
// 				rotate(vertex, cube_center, -Math.PI / 720, Math.PI / 720);
// 			}
//
// 			render(objects, ctx, dx, dy);
//
// 			autorotate_timeout = setTimeout(autorotate, 30);
// 		}
// 		var autorotate_timeout = setTimeout(autorotate, 1500);
// 	}
// })();
