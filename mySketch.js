// change menu screen
//add music later Nothing Can Be Explained (Vocal Version)
let hero
let map;
let ttt;
let heroImg, enemyImg;
let blocks;
let block;
let d;
let x, dImage;
let b, bImage;
let c, cImage;
let e, eImage;
let f, fImage;
let g, gImage;
let dude;
let dudeImage;
let key, keyImage;
let touch;
let enemyImage, enemy;
let enemySpeed = 3; // Speed of the enemy
let shape;
let enemyleft;
let enemyright;
let m;
let isJumping = false
let jumpStrength = 8
let rightAttck, bro;
let joinn;
let coins = 0;
let coins_num;
let health;
let health_tough = 100;
let health_num;
let attacked = false
let isAttacking;
let loseText;
let KeyDisplay, keso;
let theWay;
let door, doorImage;
let awayfromdaenemy = 5;
let scene = 0;
let currentMap;
let tttt;
let ttttt;
let map2;
let map3
let jumpy, jumper;
let deadImage;
let hImage, hehe;
let q, qImage;
let r, rImage;
let s, sImage;
let t, tImage;
let u, uImage;
let op, opImage;
let mchicken = 1;
let bror;
let jojo;
let boss, bossImage;
let tackie;
let menuImage;
let borbro
let buton
let invulnerable = false; // Tracks if hero is invulnerable
let invulnerableDuration = 1000; // 1 second invulnerability (in milliseconds)
let textos;
let lastDamageTime = 0; // Tracks when the hero last took damage
let text_2;
let text_3;
let text_1;
let text_4;
let timing;
let musica;

function preload() {

	heroImg = loadImage("Knight-Idle-Sheet.png");
	//you removed block by accident
	block = loadImage("tile_0011.png")
	dImage = loadImage("tile_0378.png")
	dude = loadImage("please.png")
	bImage = loadImage("tile_0331.png")
	eImage = loadImage("tile_0330.png")
	cImage = loadImage("tile_0332.png")
	fImage = loadImage("tile_0183.png")
	gImage = loadImage("tile_0002.png")
	hImage = loadImage("tile_0084.png")
	qImage = loadImage("tile_0085.png")
	rImage = loadImage("tile_0086.png")
	sImage = loadImage("tile_0104.png")
	tImage = loadImage("tile_0105.png")
	uImage = loadImage("tile_0106.png")
	menuImage = loadImage("dinner.gif")
	// opImage = loadImage("tile_0103.png")
	// opImage = loadImage("Gatsu.png")
	opImage = loadImage("borpleaseIbeguwork.png")
	bossImage = loadImage("NightBorne.png")
	musica = loadSound("CoolMusic.mp3")
	






	keyImage = loadImage("keso.png")
	enemyImage = loadImage("Enemies.png")
	keyImage = loadImage("tile_0097.png")
	KeyDisplay = loadImage("tile_0097.png")
	doorImage = loadImage("tile_0056.png")
	deadImage = loadImage("tile_0266.png")



}


function setup() {
	musica.volume = 0.3;

	displayMode('normal', 'pixelated', 4);
	createCanvas(600, 400)
	world.gravity.y = 10
	//hero properties
	hero = new Sprite(150, 245, 64, 64,"d")
	hero.debug = false
	hero.spriteSheet = dude;
	hero.anis.offset.x = -2;
	hero.scale.x = 1;
	hero.addAnis({
		normie: {
			row: 0,
			frames: 4
		},
		attack: {
			row: 1,
			frames: 7
		},
		walkie: {
			row: 2,
			frames: 8
		}
	})
	hero.anis.frameDelay = 4;
	hero.friction = 0
	hero.width = 10
	hero.height = 58
	camera.scale = 1
	hero.layer = 999;
	hero.facing = 1



	//sword Hitbox
	rightAttck = new Sprite();
	rightAttck.w = 30
	rightAttck.h = 50


	rightAttck.width = 30
	rightAttck.height = 50
	// rightAttck.width =hero.w+20
	// 	rightAttck.height =hero.h
	rightAttck.collider = "n"

	//	rightAttck.color = "rgba(0,0,0,0)"
	// rightAttck.stroke = "rgba(0,0,0,0)"
	rightAttck.debug = false
	rightAttck.layer = 5
	rightAttck.x = hero.x + 20;
	rightAttck.y = hero.y + 20;

	rightAttck.debug = false
	rightAttck.visible = false


	jumpy = new Sprite(hero.x, hero.y + 30, 5, 5, "n")
	jumpy.w = 5
	jumpy.h = 5
	jumpy.width = 5
	jumpy.height = 5
	// rightAttck.width =hero.w+20
	// 	rightAttck.height =hero.h

	//	rightAttck.color = "rgba(0,0,0,0)"
	// rightAttck.stroke = "rgba(0,0,0,0)"
	jumpy.debug = false
	jumpy.layer = 5
	jumpy.visible = false
	jumper = new GlueJoint(hero, jumpy)



	//enemy properties
	enemy = new Group()
	enemy.w = 22
	enemy.h = 100
	enemy.height = 15
	enemy.width = 22

	enemy.deubg = true
	enemy.tile = "v"
	enemy.collider = "d"
	enemy.spriteSheet = enemyImage
	enemy.layer = 1;

	enemy.addAnis({

		move: {
			row: 0,
			frames: 3
		}

	})
	enemy.anis.frameDelay = 8;
	enemy.facing = -1;
	enemy.bounciness = 0;
	enemy.layer = 2;

if (!musica.play()) {
		musica.play()
	}


	//enemy properties
	// Boss properties
	// Boss properties
	// Boss properties
	// 	boss = new Sprite(300,200,80,80)
	// 	boss.debug = false
	// 	boss.spriteSheet = bossImage;
	// 	boss.anis.offset.x = -2;
	// 	boss.scale= 1;
	// 		boss.addAnis({
	// 				normie: {row:0 , frames: 4 },
	// 								run: {row:1 , frames: 6 },

	// 			attack: {row:2 , frames: 12 },
	// 	})
	// 	boss.anis.frameDelay =4;
	// 	boss.friction = 0
	// 	boss.width = 30
	// 	boss.height = 43
	// 	boss.facing = 1
	// 	boss.debug = true
	// 	boss.collider = "d"
	//    boss.mirror.x = false; // Flip right

	tackie = new Sprite();
	tackie.w = 20
	tackie.h = 50


	tackie.width = 20
	tackie.height = 50
	// rightAttck.width =hero.w+20
	// 	rightAttck.height =hero.h
	tackie.collider = "n"

	tackie.debug = false
	tackie.layer = 5
	// tackie.x = boss.x + 20;
	// 	tackie.y = boss.y+ 20;

	tackie.debug = false
	tackie.visible = false

	//blocks
	touch = new Group()

	// start of block types
	x = new touch.Group()
	x.image = block
	x.tile = "x"
	x.w = 16;
	x.h = 16;
	x.scale = 2
	x.collider = "s"
	x.debug = false
	x.layer = 4

	d = new touch.Group()
	d.image = dImage
	d.tile = "d"
	d.w = 16;
	d.h = 16;
	d.scale = 2
	d.collider = "s"
	d.debug = false
	d.layer = 1;




	b = new touch.Group()
	b.image = bImage
	b.tile = "b"
	b.w = 16;
	b.h = 16;
	b.scale = 2
	b.collider = "s"
	b.debug = false

	c = new touch.Group()
	c.image = cImage
	c.tile = "c"
	c.w = 16;
	c.h = 16;
	c.scale = 2
	c.collider = "s"
	c.debug = false

	e = new touch.Group()
	e.image = eImage
	e.tile = "e"
	e.w = 16;
	e.h = 16;
	e.scale = 2
	e.collider = "s"
	e.debug = false

	f = new Group()
	f.image = fImage
	f.tile = "f"
	f.w = 16;
	f.h = 10;
	f.scale = 2
	f.collider = "n"
	f.debug = false

	g = new Group()
	g.image = gImage
	g.tile = "g"
	g.w = 8;
	g.h = 8;
	g.scale = 1
	g.collider = "n"
	g.debug = false

	hehe = new touch.Group()
	hehe.image = hImage
	hehe.tile = "h"
	hehe.w = 16;
	hehe.h = 16;
	hehe.scale = 2.1
	hehe.collider = "s"
	hehe.debug = false

	q = new touch.Group()
	q.image = qImage
	q.tile = "q"
	q.w = 16;
	q.h = 16;
	q.scale = 2.1
	q.collider = "s"
	q.debug = false

	r = new touch.Group()
	r.image = rImage
	r.tile = "r"
	r.w = 16;
	r.h = 16;
	r.scale = 2.1
	r.collider = "s"
	r.debug = false


	m = new Group()
	m.w = 8
	m.h = 8
	m.collider = "n"
	m.tile = "m"
	m.layer = 1;
	m.color = "rgba(0,0,0,0)"
	m.stroke = "rgba(0,0,0,0)"

	bror = new Group()
	bror.w = 8
	bror.h = 600
	bror.collider = "n"
	bror.tile = "8"
	bror.layer = 1;
	bror.color = "rgba(0,0,0,0)"
	bror.stroke = "rgba(0,0,0,0)"
	bror.debug = false

	t = new touch.Group()
	t.image = tImage
	t.tile = "t"
	t.w = 16;
	t.h = 16;
	t.scale = 2
	t.collider = "k"
	t.debug = false

	s = new touch.Group()
	s.image = sImage;
	s.tile = "s"
	s.w = 16;
	s.h = 16;
	s.scale = 2
	s.collider = "k"
	s.debug = false

	u = new touch.Group()
	u.image = uImage;
	u.tile = "u"
	u.w = 16;
	u.h = 16;
	u.scale = 2
	u.collider = "k"
	u.debug = false


	op = new touch.Group()
	op.image = opImage;
	op.tile = "y"
	op.w = 47;
	op.h = 11;
	op.scale = 2
	op.collider = "k"
	op.debug = false
	op.facing = -1;

	key = new Group()
	key.image = keyImage
	key.tile = "k"
	key.w = 8;
	key.h = 8;
	key.width = 8;
	key.height = 8;
	key.scale = 2
	key.collider = "n"
	key.debug = false

	jojo = new Group()
	jojo.w = 8
	jojo.h = 8
	jojo.collider = "n"
	jojo.tile = "j"
	jojo.layer = 1;
	jojo.color = "rgba(0,0,0,0)"
	jojo.stroke = "rgba(0,0,0,0)"




	door = new Group()
	door.image = doorImage
	door.tile = "l"
	door.w = 8;
	door.h = 8;
	door.width = 8;
	door.height = 8;
	door.scale = 2
	door.collider = "n"
	door.debug = false
	door.layer = 1


	//end  of block types


	// da map of lv 1
	ttt = [
		"......",
		"",
		"",
		".......................................................................",
		".........................ggf...ggg.....k.g..f..g..ff....",
		"......ff.....m..v...m..xxxxx..ebbbc...ebbbbbc..ebbbbbbbc...",
		"ebbbbbbbbbc..ebbbbbbc..xxxxx...............................m.v...m......l.",
		".......................xxxxx...............................xxxxxxx...xxxx",
		".......................xxxxx...............................xxxxxxx...xxxx",
		".......................xxxxx...............................xxxxxxx...xxxx",
		".......................xxxxx...............................xxxxxxx...xxxx",
		".......................xxxxx...............................xxxxxxx...xxxx",
		".......................xxxxx...............................xxxxxxx...xxxx",
		".......................xxxxx...............................xxxxxxx...xxxx",
	]

	ttttt = [

		"......",
		"",
		"",
		".............................................................",
		"...........m..v..m.................................................",
		".......ff..hqqqqqr........gggggg..............................",
		"ebbbbbbbc.................xxxxxx..............................................................",
		".........................xxxxxxxx.......................................................",
		"........................xxxxxxxxxx.....................................................",
		".......................xxxxxxxxxxxx....................................................",
		".......................xxxxxxxxxxxx.................................................",
		"........................xxxxxxxxxx..................................................",
		".........................xxxxxxxx...................................................",
		"....................................................................................",
		"....................................................................................",
		"....................................................................................",
		"....................................................................................",
		"....................................................................................",
		"....................................................................................",
		"....................................................................................",
		"....................................................................................",
		"....................................................................................",
		"....................................................................................",
		"....................................................................................",
		"....................................................................................",

	]


	tttt = [
		"......",
		"",
		"",
		"..............................................k..............",
		".....................................ggg....ebbbc...............",
		".....................................hqr.....................",
		"..........ggg....................ggg.......................................................k.ff",
		"..........hqr...............ggg..hqr............................................ff.....ebbbbbbc...",
		"........f...............f...hqr.......ffm.....v....m..........................hqqqqr",
		"ebbbbbbbc.........hqqqqqr.............hqqqqqqqqqqqqr.................f....hqr....",
		".....................................................f....l....f....hqqr..",
		".............x.x.....................................ebbbbc...hqqqr.....",
		"............xx.xx..........................................................",
		"...........xxx.xxx...................................................................",
		"..........xxxx.xxxx...............................................................",
		".........xxxxx.xxxxx.................................................................",
		".........xxxxx.xxxxx.........................ff...................l.....",
		".........xx.......xx.....................hqqqqr..............hqqqqr",
		".........xx.......xx.................g............m..v....m.........",
		".........xx.........................hqr...........hqqqqqqqqr.....",
		".........xx...................g...............................",
		".........xx.............g....hqr..............................",
		".........xx..k.........hqr...................................",
		".........xxxxxxxxxxx..........................................",
	]


	camera.zoom = 1.5;

	for (let v of enemy) {
		v.vel.x = -1;

	}



	//hero overlapping things


	coins_num = new Sprite(width - 275, height, 25, 25, "n");
	coins_num.text = "Coins : " + coins;
	coins_num.color = "rgba(249,245,245,0)"
	coins_num.textColor = "rgb(238,238,238)"
	coins_num.textSize = 10;
	coins_num.stroke = "rgba(249,245,245,0)"
	coins_num.layer = 999

	health = new Sprite(width - 500, height, health_tough, 10, "n");
	health.color = "rgb(207,0,0)"
	health.stroke = "rgb(181,4,4)"
	health.layer = 999

	health_num = new Sprite(width - 500, height, health_tough, 10, "n")
	health_num.color = "rgba(249,245,245,0)"
	health_num.textColor = "rgb(238,238,238)"
	health_num.layer = 999

	isAttacking = false

	borbro = new Sprite(300, 200, 0, 0, "s");
	borbro.image = menuImage;
	borbro.scale = 0.5

	buton = new Sprite(300, 250, 100, 50, "s");
	buton.text = "Start";
	buton.color = "white";

	keso = new Sprite(width - 350, height, 50, 50, "n")
	keso.image = KeyDisplay
	keso.scale = 2
	keso.visible = false
	theWay = false
	keso.layer = 999

	map = new Tiles(
		ttt, 118, 94, x.w + 15, x.h + 16
	)
	map.layer = 998

	invulnerable = false;
	lastDamageTime = 0;


	text_1 = new Sprite(0, 245, 80, 64, "n")
	text_1.background = "black"
	text_1.text = "A:left\nD:right\nS:attack\nspace:Jump"

	text_2 = new Sprite(600, 200, 190, 64, "n")
	text_2.background = "black"
	text_2.text = "Where am I?\nWho am I?\nI have to get OUT OF HERE!"
	text_2.layer = 1
	text_2.color = "white"


	text_3 = new Sprite(200, 300, 250, 64, "n")
	text_3.background = "black"
	text_3.text = "What is the purpose of this?\nI want to return to the real world"
	text_3.layer = 1
	text_3.color = "white"

	text_4 = new Sprite(2200, 240, 250, 64, "n")
	text_4.background = "black"
	text_4.text = "A Door!!!!"
	text_4.layer = 1
	text_4.color = "white"

}

function draw() {
	clear();

	if (invulnerable && millis() - lastDamageTime > invulnerableDuration) {
		invulnerable = false;
	}

	if (scene == 0) {
		susu();
		hero.visible = false;
		map.visible = false;
		text_2.visible = false;
		text_3.visible = false
	} else if (scene == 1) {
		background(0, 0, 0);

		hero.visible = true;
		map.visible = true;
		text_3.visible = false

		bazics();
		text_2.visible = true
		text_3.visible = false
		hero.overlaps(enemy, damage);
		v_moves();
		movement();
		enemy.debug = false;
		enemy.visible = true;
		hero.overlaps(key, keys);
		hero.overlaps(door, doors);
		hero.overlaps(g, money);
		hero.overlaps(f, die);
		if (health_tough <= 0) {
			get_Out();
		}
	} else if (scene == 2) {

		text_2.remove()
		text_1.remove()
		text_3.visible = true
		background(0, 0, 0);
		if (map) {
			map.remove();
			map = null;
		}
		if (!map2) {
			map2 = new Tiles(tttt, 118, 94, x.w + 15, x.h + 16);
			hero.x = 150;
			hero.y = 245;
		}
		bazics();
		v_moves();
		text_3.visible = true
		text_4.remove()
		movement();
		hero.overlaps(enemy, damage);
		hero.overlaps(key, keys);
		hero.overlaps(door, doors);
		hero.overlaps(g, money);
		hero.overlaps(f, die);
		if (health_tough == 0) {
			get_Out();
		}
	} else if (scene == 3) {

		The_End()
	}
}




function bazics() {
	camera.x = hero.x;
	camera.y = hero.y + 50;

	hero.rotationLock = true;

	coins_num.x = hero.x + 170;
	coins_num.y = hero.y - 70;
	coins_num.text = "Coins: " + coins;
	keso.x = hero.x + 100;
	keso.y = hero.y - 70;


	health.x = hero.x - 140;

	health.y = hero.y - 70;

	health.width = health_tough;
	health_num.x = hero.x - 140;
	health_num.y = hero.y - 70;
	health_num.width = health_tough;
	health_num.text = health_tough;

	rightAttck.x = hero.x + 20;
	rightAttck.debug = false
	rightAttck.visible = false

	tackie.x = tackie.x - 20;
	tackie.debug = false

	
	tackie.visible = false
	// boss.changeAni("attack")
	if (hero.y > 900) {
		get_Out()
	}

}

function movement() {
	if (kb.presses("s") && !isAttacking) {
		hero.changeAni("attack");
		hero.ani.frame = 0;
		isAttacking = true;
		hero.vel.x = 0;
	}


	if (isAttacking && hero.ani.name === "attack") {
		enemy.forEach(function(e) {
			if (rightAttck.overlapping(e)) {
				coins += 2
				e.remove()
			}
		});
	}


	// End attack when animation finishes
	if (isAttacking && hero.ani.name === "attack" && hero.ani.frame + 1 === hero.ani.lastFrame + 1) {
		console.log(hero.ani.frame)
		isAttacking = false;
		rightAttck.visible = false;
		hero.vel.x = 0; // Ensure velocity is reset when attack ends
		hero.changeAni("normie");
	}

	// Movement logic (only if not attacking)
	if (!isAttacking) {
		if (kb.pressing("a")) {
			hero.vel.x = -4;
			hero.changeAni("walkie");
			hero.mirror.x = false; // Flip left
			hero.facing = -1;
		} else if (kb.pressing("d")) {
			hero.vel.x = 4;
			hero.changeAni("walkie");
			hero.mirror.x = true; // Flip right
			hero.facing = 1;
		} else {
			hero.vel.x = 0; // Stop moving if no keys pressed
			hero.changeAni("normie");
		}
	}

	// Jumping logic
	if (hero.colliding(touch) && kb.pressing("space")) {
		hero.vel.y = -5;
	}

	// Update sword hitbox position
	if (hero.mirror.x) {
		rightAttck.x = hero.x + 20;
		rightAttck.y = hero.y;
	} else {
		rightAttck.x = hero.x - 20;
		rightAttck.y = hero.y;
	}
	if (invulnerable) {
		hero.visible = (millis() % 200 < 100); // Toggle visibility every 100ms
	} else {
		hero.visible = true;
	}
}


//collecting money
function money(hero, g) {
	g.remove()
	coins += 1
}
//spikes damage 
function die(hero, f) {
	if (!invulnerable) {
		// Apply damage
		health_tough -= 5;

		// Knockback: upward and slightly backward based on facing
		hero.vel.y = -6; // Strong upward push
		hero.vel.x = -hero.facing * 4; // Push opposite to facing direction

		// Start invulnerability
		invulnerable = true;
		lastDamageTime = millis();
	}
}

//enemies movement
function v_moves() {
	for (let v of enemy) {
		// every goomba is g its speed depend on the way they face in the x-axis left or right by the speed to make them move right or eft
		v.vel.x = v.facing * 1;
		if (v.facing == -1) {
			v.mirror.x = true

		} else {
			v.mirror.x = false
		} // if they collided with any of those they will change direction and move slighty away to prevent lags 
		if (v.overlapping(m)) {
			v.facing *= -1;
			v.x += v.facing * 2;
			if (v.facing == -1) {
				v.mirror.x = true
			} else {
				v.mirror.x = false
			}
		}

	}

}

//enemies damage
function damage(hero, v) {
	if (!invulnerable) {
		const knockbackStrength = 6; // Reduced for smoother gameplay

		// Apply damage
		health_tough -= 5;

		// Knockback: push hero away from enemy
		if (hero.x < v.x) {
			hero.vel.x = -knockbackStrength; // Push left if enemy is to the right
		} else {
			hero.vel.x = knockbackStrength; // Push right if enemy is to the left
		}
		hero.vel.y = -5; // Small upward bounce

		// Start invulnerability
		invulnerable = true;
		lastDamageTime = millis();
	}
}
//losing scren
function get_Out() {
	hero.remove()
	if (scene == 1) {
		map.remove()
	} else if (scene == 2) {
		map2.remove()
	}
	jumpy.remove()
	coins_num.remove()
	health_num.remove()
	health.remove()
	rightAttck.remove()
	enemy.remove()
	text_2.remove()
	text_1.remove()
	text_3.remove()
	text_4.remove()

	camera.scale = 1.1
	camera.x = 150
	camera.y = 245
	//fix the losing screen
	loseText = new Sprite(width - 440, height - 145, 250, 150, "n");
	loseText.text = "To live without hope \nis to cease to live";
	loseText.color = "rgba(0,0,0,0)"
	loseText.textColor = "rgb(255,255,255)"
	loseText.textSize = 18;
	loseText.stroke = "rgb(255,255,255)"
	background(0, 0, 0);

	let resetButton = createButton("Reset Game");
	resetButton.position(20, 20);
	resetButton.mousePressed(resetGame);
	resetButton.style('font-size', '16px');
	resetButton.style('padding', '8px');
	resetButton.style('background-color', '#222');
	resetButton.style('color', '#fff');
	resetButton.style('border', '2px solid #fff');
	resetButton.style('border-radius', '6px');

	function resetGame() {
		location.reload(); // Quick way to restart everything
	}

}

function keys(hero, key) {
	keso.visible = true
	key.remove()
	theWay = true
	console.log(theWay)
}

function doors(hero, d) {
	if (theWay == true) {
		if (scene == 1) {
			scene += 1;
			keso.visible = false;
			theWay = false;
			console.log(theWay)
		} else if (scene == 2) {
			scene += 1;
			keso.visible = false;
			theWay = false;
			console.log(theWay)
		}
	}
}

function squareSequence() {
	for (let i of op) {
		// Ensure the object moves in the correct direction based on the "facing" property
		i.vel.x = i.facing * 0.5; // Move the square in the direction it's facing

		// Check if there's an overlap with 'jojo'
		if (i.overlapping(jojo)) {
			// Change direction when they overlap
			i.facing *= -1; // Reverse the direction
			i.x += i.facing * 2; // Move it slightly away from the overlap to prevent sticking
		}
	}
}


function susu() {
	background("black");
	if (buton.mouse.pressed()) {
		borbro.remove();
		buton.remove();
		borbro = null;
		buton = null;
		scene = 1;
	}
}


function The_End() {

	hero.remove()
	// if (scene !== 2) {
	// 	map2.remove()
	// }
	jumpy.remove()
	coins_num.remove()
	health_num.remove()
	health.remove()
	rightAttck.remove()
	enemy.remove()
	text_1.remove()
	text_2.remove()
	text_3.remove()
	text_4.remove()

	camera.scale = 1.1
	camera.x = 150
	camera.y = 245
	//fix the losing screen
	loseText = new Sprite(width - 440, height - 145, 250, 150, "n");
	loseText.text = `Thanks for playing\nCoins collected : ${coins}\n`;
	loseText.color = "rgba(0,0,0,0)"
	loseText.textColor = "rgb(255,255,255)"
	loseText.textSize = 18;
	loseText.stroke = "rgb(255,255,255)"
	background(0, 0, 0);

	let resetButton = createButton("Play Again");
	resetButton.position(20, 20);
	resetButton.mousePressed(resetGame);
	resetButton.style('font-size', '16px');
	resetButton.style('padding', '8px');
	resetButton.style('background-color', '#222');
	resetButton.style('color', '#fff');
	resetButton.style('border', '2px solid #fff');
	resetButton.style('border-radius', '6px');

	function resetGame() {
		location.reload(); // Quick way to restart everything
	}
}