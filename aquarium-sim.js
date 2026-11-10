/* ====== Tema paletleri (dükkandaki temalar bunları kullanır) ====== */
const AQUARIUM_THEMES = {
    retro_ocean: { bands: ['#2ec4b6', '#20a39e', '#0b6e8a', '#064963'], dither: ['#20a39e', '#0b6e8a', '#064963', '#042d3e'], sand: '#e0c097', sandDot: '#b89065', rock: '#112d4e', hole: '#20a39e', kelp: ['#1b7a3e', '#2ec4b6'] },
    lagoon:      { bands: ['#7ff5e0', '#4fe0d0', '#26b8b8', '#138a9c'], dither: ['#4fe0d0', '#26b8b8', '#138a9c', '#0b6479'], sand: '#f3dfae', sandDot: '#d9bf86', rock: '#1d6a7a', hole: '#4fe0d0', kelp: ['#12a05a', '#7ff5e0'] },
    sunset:      { bands: ['#ffb48a', '#f27c8d', '#b0498f', '#4a2468'], dither: ['#f27c8d', '#b0498f', '#4a2468', '#2e1448'], sand: '#f2c9a0', sandDot: '#d49f78', rock: '#3a1a4f', hole: '#f27c8d', kelp: ['#a23b72', '#ffb48a'] },
    cyberpunk:   { bands: ['#2b0f54', '#1e0b45', '#140836', '#0b0424'], dither: ['#1e0b45', '#140836', '#0b0424', '#060216'], sand: '#2b1b4d', sandDot: '#53fc18', rock: '#0d0620', hole: '#1e0b45', kelp: ['#53fc18', '#00e5ff'] },
    candy:       { bands: ['#ffc6e3', '#f9a8d4', '#c4a1f0', '#8b7ad8'], dither: ['#f9a8d4', '#c4a1f0', '#8b7ad8', '#6b5cc0'], sand: '#fff0f7', sandDot: '#f5b8d6', rock: '#9a74d8', hole: '#f9a8d4', kelp: ['#ff6fb5', '#7ee8fa'] },
    abyss:       { bands: ['#0d2a47', '#081d33', '#05121f', '#020911'], dither: ['#081d33', '#05121f', '#020911', '#01040a'], sand: '#2f3b4c', sandDot: '#4a5a70', rock: '#030a14', hole: '#081d33', kelp: ['#0e5a4a', '#2a7f8f'] }
};

/* ====== Piksel sprite'lar (karakter -> renk; '.' boş) ====== */
const AQUARIUM_SPRITES = {
    chest: { px: 4, pal: { K: '#000000', W: '#b8622f', w: '#7a3e1d', G: '#ffb300', Y: '#fff1a8' }, rows: [
        '..KKKKKKKKKK..', '.KWWWWWWWWWWK.', 'KWWWWWWWWWWWWK', 'KKKKKKGGKKKKKK',
        'KwwwwKGYGKwwwK', 'KwwwwwKGKwwwwK', 'KwwwwwwwwwwwwK', 'KKKKKKKKKKKKKK'] },
    coral: { px: 4, pal: { P: '#ff4fa3', p: '#b02a74', C: '#00e5ff' }, rows: [
        '..P.....C...', '.PP..P..CC..', '.PPP.PP.CC.P', 'PPPPPPPPCCPP', '.pppppppCCp.', '..pppppppp..'] },
    crystal: { px: 4, pal: { C: '#1fb6d6', c: '#aef5ff' }, rows: [
        '.....C.......', '....CCC..C...', '....CcC.CCC..', '...CCcCCCcC..',
        '..CCcccCCcCC.', '..CcccccCccC.', '.CCccccccccCC', 'CCCCCCCCCCCCC'] },
    anchor: { px: 4, pal: { g: '#9aa8b5', r: '#a0522d' }, rows: [
        '...gggg...', '...g..g...', '...gggg...', '....gg....', 'rrrrggrrrr',
        '....gg....', 'g...rr...g', 'gg..rr..gg', '.gggggggg.'] },
    lamp: { px: 4, pal: { K: '#000000', Y: '#fff1a8', R: '#e63946', W: '#f1f1f1' }, rows: [
        '...YY...', '..KYYK..', '..RRRR..', '..WWWW..', '..RRRR..', '.WWWWWW.', '.RRRRRR.', '.WWWWWW.', 'WWWWWWWW'] },
    castle: { px: 4, pal: { S: '#8a93a8', d: '#1a1f35' }, rows: [
        'S.S..S.SS.S..S.S', 'SSSS.SSSSSS.SSSS', 'SdSS.SSSSSS.SSdS', 'SSSS.SSddSS.SSSS',
        'SdSS.SSddSS.SSdS', 'SSSSSSSddSSSSSSS', 'SSSSSSSddSSSSSSS'] },
    bubbler: { px: 4, pal: { D: '#22364a', L: '#53fc18' }, rows: [
        '...DD...', '..DDDD..', 'DDDDDDDD', 'DLDLDLDD', 'DDDDDDDD', 'DDDDDDDD'] },
    jellyA: { px: 4, pal: { P: '#d18cff', W: '#ffffff' }, rows: [
        '..PPPPP..', '.PPPPPPP.', 'PPWPPPWPP', 'PPPPPPPPP', 'P.P.P.P.P', '.P.P.P.P.', 'P.P.P.P.P'] },
    jellyB: { px: 4, pal: { P: '#d18cff', W: '#ffffff' }, rows: [
        '..PPPPP..', '.PPPPPPP.', 'PPWPPPWPP', 'PPPPPPPPP', '.P.P.P.P.', 'P.P.P.P.P', '.P.P.P.P.'] },
    starfish: { px: 4, pal: { O: '#ff8a3d', Y: '#ffd166' }, rows: [
        '...O...', '..OOO..', 'OOOYOOO', '.OOOOO.', '.OO.OO.', '.O...O.'] },
    crabA: { px: 4, pal: { R: '#ff5722', W: '#ffffff' }, rows: [
        'RR.......RR', 'R.RRRRRRR.R', '..RWRRRWR..', '.RRRRRRRRR.', '..RRRRRRR..', '.R.R...R.R.'] },
    crabB: { px: 4, pal: { R: '#ff5722', W: '#ffffff' }, rows: [
        'RR.......RR', 'R.RRRRRRR.R', '..RWRRRWR..', '.RRRRRRRRR.', '..RRRRRRR..', '..R.R.R.R..'] },
    turtleA: { px: 4, pal: { G: '#2e9e4f', g: '#1b6b34', H: '#8fd18f', F: '#8fd18f' }, rows: [
        '...GGGGG....', '..GgGGgGG.HH', '.GGGgGGGGGHH', '..GGGGGGG...', '..F.....F...'] },
    turtleB: { px: 4, pal: { G: '#2e9e4f', g: '#1b6b34', H: '#8fd18f', F: '#8fd18f' }, rows: [
        '...GGGGG....', '..GgGGgGG.HH', '.GGGgGGGGGHH', '..GGGGGGG...', '.F.......F..'] },
    seahorse: { px: 4, pal: { S: '#ffb703', W: '#000000' }, rows: [
        '..SSS.', '.SWSSS', '.SSS..', '.SSS..', '..SSS.', '..SS..', '..SS..', '.SS...', 'SS....'] }
};

/* ====== Yüzme izi paletleri: [eski, orta, taze] ====== */
const AQUARIUM_TRAIL_PAL = {
    kick_neon: ['#1b8a03', '#2fd10d', '#53FC18'],
    stars:     ['#b8860b', '#ffd700', '#fff6a8'],
    gold_dust: ['#b87800', '#ffb300', '#ffe27a'],
    ice:       ['#3a6ea5', '#7fd7ff', '#e6fbff'],
    hearts:    ['#a3123a', '#ff2d6f', '#ff8fb3'],
    fire:      ['#7a1f0a', '#ff5722', '#ffd23f'],
    void:      ['#2a0a4a', '#7b2cff', '#d18cff'],
    rainbow:   ['#ff0055', '#ff9900', '#ffff00', '#33cc33', '#0099ff', '#9900ff']
};

/**
 * Akvaryum - 8-Bit Pixel Art Kişisel Sanal Bebek (Tamagotchi) Motoru
 * Retro 8-bit piksel arka plan, bölgesel piksel yosunlaşma, oksijen seviyesi,
 * 10 dk ana yem, AFK Gold Farm ve 8-bit yüzme izi motoru.
 */

class PersonalAquarium {
    constructor(canvasId, glassCanvasId, options = {}) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.glassCanvas = document.getElementById(glassCanvasId);
        this.glassCtx = this.glassCanvas ? this.glassCanvas.getContext('2d') : null;

        this.fishData = null;
        this.fishImg = null;

        // Balık Durumu & Pozisyon
        this.fish = {
            x: 200,
            y: 200,
            targetX: 200,
            targetY: 200,
            vx: 0,
            vy: 0,
            angle: 0,
            facingRight: true,
            scale: 0.8,
            level: 1,
            maxLevel: 10,
            health: 100,
            isSick: false,
            happiness: 100,
            wiggleTimer: 0
        };

        // Hayatta Kalma Parametreleri
        this.oxygen = 85;
        
        // Bölgesel Piksel Yosunlaşma (Regional Pixel Algae Patches)
        this.algaePatches = [];
        this.algaeSpawnInterval = 45;
        this.algaeSpawnTimer = 0;
        this.algaeDirty = 0;
        
        // Yem Mekaniği
        this.feedCooldownMax = 600;
        this.feedCooldown = 0;
        this.isFastTestMode = false;
        this.foodPellets = [];

        // AFK Gold Farming
        this.gold = 50;
        this.afkFarmInterval = 60;
        this.afkFarmTimer = 0;
        this.goldPerTick = 10;
        this.goldPopups = [];

        // Kozmetikler
        this.equippedCosmetics = {
            trail: 'default',
            decor: 'none',
            companion: 'none',
            theme: 'retro_ocean'
        };
        this.swimTrails = [];
        this.trailSeq = 0;
        this.trailDist = 0;
        this.sceneTime = 0;
        this.companionState = { x: 0, dir: 1, t: 0, init: false };

        // Ziyaret / Misafirlik
        this.isGuestMode = false;
        this.guestOwner = null;
        this.myOwnFishBackup = null;

        // Piksel Efektleri
        this.bubbles = [];
        this.cleaningParticles = [];
        this.isWipingGlass = false;
        this.isAscending = false;

        this.lastTime = performance.now();
        this.animFrame = null;

        this.onLevelUpCallback = null;
        this.onFullGrownCallback = null;
        this.onStatusChangeCallback = null;
        this.onReleaseCallback = null;
        this.onGoldEarnedCallback = null;

        this.init();
    }

    init() {
        this.ctx.imageSmoothingEnabled = false;
        if (this.glassCtx) this.glassCtx.imageSmoothingEnabled = false;

        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.setupGlassCleaningEvents();
        this.setupFoodClickEvents();
        
        this.spawnAlgaePatch();
        this.startLoop();
    }

    resize() {
        if (!this.canvas) return;
        const rect = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;

        this.ctx.imageSmoothingEnabled = false;
        if (this.glassCtx) {
            this.glassCanvas.width = rect.width;
            this.glassCanvas.height = rect.height;
            this.glassCtx.imageSmoothingEnabled = false;
        }

        if (this.fish.x === 200 && this.fish.y === 200) {
            this.fish.x = this.canvas.width / 2;
            this.fish.y = this.canvas.height / 2;
            this.fish.targetX = this.fish.x;
            this.fish.targetY = this.fish.y;
        }
    }

    spawnAlgaePatch() {
        if (this.algaePatches.length >= 5) return;

        const w = this.canvas.width || 800;
        const h = this.canvas.height || 500;

        const marginX = w * 0.12;
        const marginY = h * 0.15;
        const x = Math.round((marginX + Math.random() * (w - marginX * 2)) / 8) * 8;
        const y = Math.round((marginY + Math.random() * (h - marginY * 2.2)) / 8) * 8;

        this.algaePatches.push({
            id: 'patch_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
            x: x,
            y: y,
            radius: 28 + Math.random() * 20,
            health: 1.0,
            maxHealth: 1.0,
            seed: Math.random()
        });

        this.updateAlgaePercentage();
        this.checkHealth();
        this.notifyStatusChange();
    }

    updateAlgaePercentage() {
        let totalHealth = 0;
        for (const p of this.algaePatches) {
            totalHealth += p.health;
        }
        this.algaeDirty = Math.min(100, Math.round(totalHealth * 20));
    }

    loadFish(fishData, savedProgress = null) {
        this.fishData = fishData;
        const img = new Image();
        img.onload = () => {
            this.fishImg = img;
            if (savedProgress) {
                this.fish.level = savedProgress.level || 1;
                this.oxygen = savedProgress.oxygen !== undefined ? savedProgress.oxygen : 85;
                this.algaeDirty = savedProgress.algaeDirty !== undefined ? savedProgress.algaeDirty : 0;
                this.feedCooldown = savedProgress.feedCooldown || 0;
                this.gold = savedProgress.gold !== undefined ? savedProgress.gold : 50;
                if (savedProgress.equippedCosmetics) {
                    this.equippedCosmetics = { trail: 'default', decor: 'none', companion: 'none', theme: 'retro_ocean', ...savedProgress.equippedCosmetics };
                }
            } else {
                this.fish.level = 1;
                this.feedCooldown = 0;
            }
            this.updateFishScale();
            this.notifyStatusChange();
        };
        img.src = fishData.dataUrl;
    }

    loadGuestAquarium(guestFish) {
        if (!this.isGuestMode) {
            this.myOwnFishBackup = {
                fishData: this.fishData,
                fishImg: this.fishImg,
                level: this.fish.level,
                oxygen: this.oxygen,
                algaeDirty: this.algaeDirty,
                feedCooldown: this.feedCooldown,
                equippedCosmetics: { ...this.equippedCosmetics }
            };
        }

        this.isGuestMode = true;
        this.guestOwner = guestFish.creator;
        this.fishData = guestFish;

        const img = new Image();
        img.onload = () => {
            this.fishImg = img;
            this.fish.level = guestFish.level || 5;
            this.oxygen = guestFish.oxygen !== undefined ? guestFish.oxygen : 80;
            this.algaeDirty = guestFish.algaeDirty !== undefined ? guestFish.algaeDirty : 20;
            if (guestFish.equippedCosmetics) {
                this.equippedCosmetics = { trail: 'default', decor: 'none', companion: 'none', theme: 'retro_ocean', ...guestFish.equippedCosmetics };
            }
            this.updateFishScale();
            this.notifyStatusChange();
        };
        img.src = guestFish.dataUrl;
    }

    returnToMyAquarium() {
        if (!this.isGuestMode || !this.myOwnFishBackup) return;
        this.isGuestMode = false;
        this.guestOwner = null;

        const b = this.myOwnFishBackup;
        this.fishData = b.fishData;
        this.fishImg = b.fishImg;
        this.fish.level = b.level;
        this.oxygen = b.oxygen;
        this.algaeDirty = b.algaeDirty;
        this.feedCooldown = b.feedCooldown;
        this.equippedCosmetics = b.equippedCosmetics;

        this.updateFishScale();
        this.notifyStatusChange();
    }

    updateFishScale() {
        const t = (this.fish.level - 1) / (this.fish.maxLevel - 1);
        this.fish.scale = 0.7 + t * 0.7;
    }

    setupGlassCleaningEvents() {
        if (!this.glassCanvas) return;
        const gc = this.glassCanvas;

        const wipeAt = (clientX, clientY) => {
            const rect = gc.getBoundingClientRect();
            const x = clientX - rect.left;
            const y = clientY - rect.top;

            this.cleanAlgaePatchesAt(x, y, 36);

            if (Math.random() < 0.35) {
                window.soundEngine && window.soundEngine.playCleanWipe();
            }
            this.spawnCleaningBubble(x, y);

            if (this.isGuestMode && Math.random() < 0.15) {
                this.addGold(1, 'Arkadaşına Yardım');
            }
        };

        const onDown = (e) => {
            this.isWipingGlass = true;
            const p = e.touches ? e.touches[0] : e;
            wipeAt(p.clientX, p.clientY);
        };

        const onMove = (e) => {
            if (!this.isWipingGlass) return;
            const p = e.touches ? e.touches[0] : e;
            wipeAt(p.clientX, p.clientY);
        };

        const onUp = () => {
            this.isWipingGlass = false;
        };

        gc.addEventListener('mousedown', onDown);
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);

        gc.addEventListener('touchstart', onDown, { passive: true });
        window.addEventListener('touchmove', onMove, { passive: true });
        window.addEventListener('touchend', onUp);
    }

    setupFoodClickEvents() {
        this.canvas.addEventListener('click', (e) => {
            if (this.isWipingGlass) return;
            const rect = this.canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const dist = Math.hypot(x - this.fish.x, y - this.fish.y);
            if (dist < 60 * this.fish.scale) {
                this.petFish();
            }
        });
    }

    cleanAlgaePatchesAt(x, y, spongeRadius) {
        let anyCleaned = false;

        for (let i = this.algaePatches.length - 1; i >= 0; i--) {
            const patch = this.algaePatches[i];
            const dist = Math.hypot(x - patch.x, y - patch.y);

            if (dist < patch.radius + spongeRadius) {
                patch.health -= 0.18;
                anyCleaned = true;

                if (patch.health <= 0) {
                    this.algaePatches.splice(i, 1);
                    this.addGold(2, 'Piksel Temizliği');
                    window.soundEngine && window.soundEngine.playBubble(1.6);
                }
            }
        }

        if (anyCleaned) {
            this.updateAlgaePercentage();
            this.checkHealth();
            this.notifyStatusChange();
        }
    }

    spawnCleaningBubble(x, y) {
        this.cleaningParticles.push({
            x: Math.round(x / 4) * 4,
            y: Math.round(y / 4) * 4,
            vx: (Math.random() - 0.5) * 2,
            vy: -Math.random() * 3 - 1,
            size: 6,
            alpha: 0.9
        });
    }

    petFish() {
        this.fish.happiness = Math.min(100, this.fish.happiness + 15);
        window.soundEngine && window.soundEngine.playBubble(1.6);

        if (this.isGuestMode) {
            window.soundEngine && window.soundEngine.playHelp();
            this.addGold(5, 'Dostça Ziyaret');
        }

        for (let i = 0; i < 3; i++) {
            this.cleaningParticles.push({
                x: this.fish.x,
                y: this.fish.y - 15,
                vx: (Math.random() - 0.5) * 2,
                vy: -Math.random() * 2 - 1.5,
                size: 16,
                alpha: 1,
                isHeart: true
            });
        }
        this.notifyStatusChange();
    }

    pumpAir() {
        this.oxygen = Math.min(100, this.oxygen + 14);
        window.soundEngine && window.soundEngine.playAirPump();

        const startX = Math.round((this.canvas.width * 0.15) / 8) * 8;
        const startY = this.canvas.height - 20;

        for (let i = 0; i < 14; i++) {
            this.bubbles.push({
                x: startX + (Math.random() - 0.5) * 24,
                y: startY + Math.random() * 8,
                vx: (Math.random() - 0.5) * 1.2,
                vy: -Math.random() * 3 - 2,
                size: Math.round((Math.random() * 6 + 4) / 2) * 2,
                alpha: 0.8
            });
        }

        this.checkHealth();
        this.notifyStatusChange();
    }

    addGold(amount, reason = '') {
        this.gold += amount;
        window.soundEngine && window.soundEngine.playCoin();

        this.goldPopups.push({
            x: this.fish.x,
            y: this.fish.y - 30,
            text: `+${amount} 🪙`,
            alpha: 1,
            vy: -1.0
        });

        if (this.onGoldEarnedCallback) {
            this.onGoldEarnedCallback(this.gold, amount, reason);
        }
        this.notifyStatusChange();
    }

    equipCosmetic(type, id) {
        if (this.equippedCosmetics[type] !== undefined) {
            this.equippedCosmetics[type] = id;
            window.soundEngine && window.soundEngine.playBuy();
            this.notifyStatusChange();
        }
    }

    feedFish() {
        if (this.feedCooldown > 0 || this.isGuestMode) return false;

        const pelletX = Math.round((this.canvas.width * (0.3 + Math.random() * 0.4)) / 8) * 8;
        this.foodPellets.push({
            x: pelletX,
            y: 10,
            vy: 2.0,
            size: 8,
            eaten: false
        });

        this.feedCooldown = this.isFastTestMode ? 5 : this.feedCooldownMax;
        
        this.fish.targetX = pelletX;
        this.fish.targetY = 40;

        window.soundEngine && window.soundEngine.playBubble(1.1);
        this.notifyStatusChange();
        return true;
    }

    toggleFastTestMode(enable) {
        this.isFastTestMode = enable !== undefined ? enable : !this.isFastTestMode;
        if (this.isFastTestMode && this.feedCooldown > 5) {
            this.feedCooldown = 5;
        }
        return this.isFastTestMode;
    }

    checkHealth() {
        const wasSick = this.fish.isSick;
        if (this.oxygen < 25 || this.algaeDirty > 70) {
            this.fish.isSick = true;
            this.fish.health = Math.max(20, this.fish.health - 0.2);
        } else {
            this.fish.isSick = false;
            this.fish.health = Math.min(100, this.fish.health + 0.5);
        }

        if (wasSick !== this.fish.isSick) {
            this.notifyStatusChange();
        }
    }

    onPelletEaten() {
        window.soundEngine && window.soundEngine.playEat();

        if (!this.fish.isSick && this.fish.level < this.fish.maxLevel) {
            this.fish.level++;
            this.updateFishScale();
            window.soundEngine && window.soundEngine.playLevelUp();

            this.addGold(15, 'Beslenme Bonusu');

            if (this.onLevelUpCallback) {
                this.onLevelUpCallback(this.fish.level);
            }

            if (this.fish.level >= this.fish.maxLevel) {
                window.soundEngine && window.soundEngine.playFullGrownChime();
                if (this.onFullGrownCallback) {
                    this.onFullGrownCallback();
                }
            }
        }
        this.notifyStatusChange();
    }

    releaseToOcean() {
        if (this.fish.level < this.fish.maxLevel) return null;

        this.isAscending = true;
        window.soundEngine && window.soundEngine.playAscension();

        this.fish.targetX = this.canvas.width + 150;
        this.fish.targetY = this.canvas.height * 0.4;
        this.fish.facingRight = true;

        const releasedFish = {
            ...this.fishData,
            releasedAt: Date.now(),
            level: this.fish.level,
            finalScale: this.fish.scale,
            equippedCosmetics: { ...this.equippedCosmetics }
        };

        this.addGold(100, 'Okyanusa Ulaşma');

        setTimeout(() => {
            if (this.onReleaseCallback) {
                this.onReleaseCallback(releasedFish);
            }
        }, 2200);

        return releasedFish;
    }

    resetAquarium() {
        this.fishData = null;
        this.fishImg = null;
        this.isAscending = false;
        this.fish.level = 1;
        this.fish.isSick = false;
        this.fish.health = 100;
        this.oxygen = 85;
        this.feedCooldown = 0;
        this.algaePatches = [];
        this.algaeDirty = 0;
        this.spawnAlgaePatch();
        this.notifyStatusChange();
    }

    notifyStatusChange() {
        if (this.onStatusChangeCallback) {
            this.onStatusChangeCallback({
                level: this.fish.level,
                maxLevel: this.fish.maxLevel,
                oxygen: Math.round(this.oxygen),
                algaeDirty: this.algaeDirty,
                algaePatchCount: this.algaePatches.length,
                feedCooldown: Math.ceil(this.feedCooldown),
                isSick: this.fish.isSick,
                isFullGrown: this.fish.level >= this.fish.maxLevel,
                isFastTestMode: this.isFastTestMode,
                gold: this.gold,
                afkSecondsRemaining: Math.ceil(this.afkFarmInterval - this.afkFarmTimer),
                isGuestMode: this.isGuestMode,
                guestOwner: this.guestOwner,
                equippedCosmetics: this.equippedCosmetics,
                name: this.fishData ? this.fishData.name : '',
                creator: this.fishData ? this.fishData.creator : ''
            });
        }
    }

    startLoop() {
        const loop = (currentTime) => {
            const dt = Math.min(0.1, (currentTime - this.lastTime) / 1000);
            this.lastTime = currentTime;

            this.update(dt);
            this.render();

            this.animFrame = requestAnimationFrame(loop);
        };
        this.animFrame = requestAnimationFrame(loop);
    }

    update(dt) {
        this.sceneTime += dt;
        if (!this.isGuestMode) {
            this.oxygen = Math.max(0, this.oxygen - dt * 0.4);

            const interval = this.isFastTestMode ? 10 : this.algaeSpawnInterval;
            this.algaeSpawnTimer += dt;
            if (this.algaeSpawnTimer >= interval) {
                this.algaeSpawnTimer = 0;
                this.spawnAlgaePatch();
            }

            if (this.feedCooldown > 0) {
                this.feedCooldown = Math.max(0, this.feedCooldown - dt);
                if (this.feedCooldown === 0) {
                    window.soundEngine && window.soundEngine.playBubble(1.8);
                    this.notifyStatusChange();
                }
            }

            // AFK Gold Farm
            if (this.fishImg && !this.fish.isSick) {
                this.afkFarmTimer += dt;
                if (this.afkFarmTimer >= this.afkFarmInterval) {
                    this.afkFarmTimer = 0;
                    this.addGold(this.goldPerTick, 'AFK Farm');
                }
            }
        }

        this.checkHealth();

        for (let i = this.foodPellets.length - 1; i >= 0; i--) {
            const p = this.foodPellets[i];
            p.y += p.vy;

            const d = Math.hypot(this.fish.x - p.x, this.fish.y - p.y);
            if (d < 35 * this.fish.scale) {
                this.foodPellets.splice(i, 1);
                this.onPelletEaten();
                continue;
            }

            if (p.y > this.canvas.height - 25) {
                this.foodPellets.splice(i, 1);
            }
        }

        this.updateFishMovement(dt);
        this.updateCosmeticTrails(dt);
        this.updateCompanion(dt);
        this.updateParticles(dt);
        this.updateGoldPopups(dt);
    }

    updateFishMovement(dt) {
        if (!this.fishImg) return;

        const w = this.canvas.width;
        const h = this.canvas.height;

        this.fish.wiggleTimer += dt * (this.fish.isSick ? 2 : 4.5);

        if (this.isAscending) {
            this.fish.x += dt * 320;
            this.fish.y += Math.round(Math.sin(this.fish.wiggleTimer * 2) * 2) * 2;
            this.fish.facingRight = true;
            return;
        }

        if (this.foodPellets.length > 0) {
            const closest = this.foodPellets[0];
            this.fish.targetX = closest.x;
            this.fish.targetY = closest.y;
        } else {
            if (Math.hypot(this.fish.targetX - this.fish.x, this.fish.targetY - this.fish.y) < 30 || Math.random() < 0.015) {
                this.fish.targetX = 80 + Math.random() * (w - 160);
                this.fish.targetY = 70 + Math.random() * (h - 180);
            }
        }

        const dx = this.fish.targetX - this.fish.x;
        const dy = this.fish.targetY - this.fish.y;
        const speed = this.fish.isSick ? 45 : (this.foodPellets.length > 0 ? 160 : 85);
        const dist = Math.hypot(dx, dy);

        if (dist > 5) {
            this.fish.vx = (dx / dist) * speed;
            this.fish.vy = (dy / dist) * speed;
            this.fish.x += this.fish.vx * dt;
            this.fish.y += this.fish.vy * dt;

            if (Math.abs(this.fish.vx) > 5) {
                this.fish.facingRight = this.fish.vx > 0;
            }

            this.trailDist += Math.hypot(this.fish.vx * dt, this.fish.vy * dt);
            while (this.trailDist >= 14) {
                this.trailDist -= 14;
                this.emitSwimTrailParticle();
            }
        }

        if (Math.random() < 0.03 && !this.fish.isSick) {
            this.bubbles.push({
                x: Math.round((this.fish.facingRight ? this.fish.x + 25 * this.fish.scale : this.fish.x - 25 * this.fish.scale) / 4) * 4,
                y: Math.round(this.fish.y / 4) * 4,
                vx: 0,
                vy: -Math.random() * 2 - 1,
                size: 6,
                alpha: 0.7
            });
        }
    }

    emitSwimTrailParticle() {
        const trailType = this.equippedCosmetics.trail || 'default';
        const f = this.fish;
        const halfW = this.fishData ? (this.fishData.width / 2) * f.scale * 0.85 : 30 * f.scale;
        const tailX = Math.round((f.facingRight ? f.x - halfW : f.x + halfW) / 4) * 4;
        const tailY = Math.round(f.y / 4) * 4;

        this.trailSeq = (this.trailSeq || 0) + 1;
        this.swimTrails.push({
            x: tailX,
            y: tailY,
            life: 1.0,
            seq: this.trailSeq,
            type: trailType
        });
        if (this.swimTrails.length > 90) this.swimTrails.shift();
    }

    updateCosmeticTrails(dt) {
        for (let i = this.swimTrails.length - 1; i >= 0; i--) {
            const p = this.swimTrails[i];
            p.life -= dt / 0.9;
            if (p.type === 'hearts' || p.type === 'fire') p.y -= dt * 16;
            if (p.life <= 0) this.swimTrails.splice(i, 1);
        }
    }

    updateCompanion(dt) {
        const id = this.equippedCosmetics.companion;
        const c = this.companionState;
        const w = this.canvas.width;
        c.t += dt;
        if (!id || id === 'none') return;
        if (!c.init) { c.x = w * 0.3; c.init = true; }

        if (id === 'crab') {
            c.x += c.dir * 22 * dt;
            if (c.x > w * 0.82) c.dir = -1;
            if (c.x < w * 0.18) c.dir = 1;
        } else if (id === 'turtle') {
            c.x += c.dir * 28 * dt;
            if (c.x > w + 60) c.dir = -1;
            if (c.x < -60) c.dir = 1;
        }
    }

    updateGoldPopups(dt) {
        for (let i = this.goldPopups.length - 1; i >= 0; i--) {
            const pop = this.goldPopups[i];
            pop.y += pop.vy;
            pop.alpha -= dt * 0.8;
            if (pop.alpha <= 0) {
                this.goldPopups.splice(i, 1);
            }
        }
    }

    updateParticles(dt) {
        if (this.equippedCosmetics.decor === 'bubbler' && Math.random() < 0.12) {
            this.bubbles.push({
                x: Math.round((this.canvas.width * 0.55) / 4) * 4,
                y: this.canvas.height - 96 - 34,
                vx: 0,
                vy: -Math.random() * 1.5 - 1,
                size: 6,
                alpha: 0.8
            });
        }

        for (let i = this.bubbles.length - 1; i >= 0; i--) {
            const b = this.bubbles[i];
            b.y += b.vy;
            if (b.y < -10) {
                this.bubbles.splice(i, 1);
            }
        }

        for (let i = this.cleaningParticles.length - 1; i >= 0; i--) {
            const p = this.cleaningParticles[i];
            p.y += p.vy;
            p.alpha -= dt * 1.2;
            if (p.alpha <= 0 || p.y < -20) {
                this.cleaningParticles.splice(i, 1);
            }
        }
    }

    render() {
        const ctx = this.ctx;
        const w = this.canvas.width;
        const h = this.canvas.height;

        ctx.imageSmoothingEnabled = false;
        ctx.clearRect(0, 0, w, h);

        // 1. 8-Bit Piksel Akvaryum Arka Planı (Pixel Dithered Water & 8-Bit Reef)
        this.renderPixelBackground(ctx, w, h);

        // 2. 8-Bit Piksel Yemler
        for (const p of this.foodPellets) {
            ctx.fillStyle = '#000000';
            ctx.fillRect(Math.round(p.x) - 4, Math.round(p.y) - 4, 10, 10);
            ctx.fillStyle = '#ff9800';
            ctx.fillRect(Math.round(p.x) - 3, Math.round(p.y) - 3, 8, 8);
            ctx.fillStyle = '#ffeb3b';
            ctx.fillRect(Math.round(p.x) - 1, Math.round(p.y) - 1, 4, 4);
        }

        // 3. Piksel Baloncuklar
        for (const b of this.bubbles) {
            const bx = Math.round(b.x);
            const by = Math.round(b.y);
            const s = b.size;

            ctx.fillStyle = '#000000';
            ctx.fillRect(bx - 1, by - 1, s + 2, s + 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
            ctx.fillRect(bx, by, s, s);
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(bx, by, 2, 2);
        }

        // 4. Piksel Yüzme İzi Parçacıkları
        this.renderPixelSwimTrails(ctx);

        // 5. 8-Bit Piksel Balık Çizimi
        this.renderPixelFish(ctx);

        // 6. Bölgesel Piksel Yosun Lekeleri (8-Bit Moss Blobs)
        this.renderPixelAlgaePatches(ctx);

        // 7. Piksel Kalpler & Temizleme Tozları
        for (const p of this.cleaningParticles) {
            ctx.save();
            ctx.globalAlpha = p.alpha;
            if (p.isHeart) {
                this.drawPixelHeart(ctx, Math.round(p.x), Math.round(p.y));
            } else {
                ctx.fillStyle = '#53fc18';
                ctx.fillRect(Math.round(p.x), Math.round(p.y), 4, 4);
            }
            ctx.restore();
        }

        // 8. 8-Bit Altın Popupları
        for (const pop of this.goldPopups) {
            ctx.save();
            ctx.globalAlpha = pop.alpha;
            ctx.fillStyle = '#000000';
            ctx.font = '12px "Press Start 2P", monospace';
            ctx.textAlign = 'center';
            ctx.fillText(pop.text, Math.round(pop.x) + 2, Math.round(pop.y) + 2);
            ctx.fillStyle = '#ffd700';
            ctx.fillText(pop.text, Math.round(pop.x), Math.round(pop.y));
            ctx.restore();
        }

        // 9. Retro Piksel Cam Kenarlığı
        this.renderPixelGlassBorder(ctx, w, h);

        if (this.isAscending) {
            this.renderAscensionPortal(ctx, w, h);
        }
    }

    // 8-Bit Piksel Akvaryum Arka Planı (Turkuaz Dithered Su, Piksel Kayalar ve Kum)
    // Piksel Yüzme İzi: her şey 4px ızgarasında, saydamlık yok, renk kademeleriyle söner
    renderPixelSwimTrails(ctx) {
        const G = 4;
        const SHAPES = {
            plus:  [[1,0],[0,1],[1,1],[2,1],[1,2]],
            heart: [[0,0],[2,0],[0,1],[1,1],[2,1],[1,2]]
        };
        for (const p of this.swimTrails) {
            const stage = p.life > 0.66 ? 3 : (p.life > 0.33 ? 2 : 1); // 3 = taze
            const x = Math.round(p.x / G) * G;
            const y = Math.round(p.y / G) * G;
            const pal = AQUARIUM_TRAIL_PAL[p.type];
            const sq = stage >= 2 ? 8 : 4;

            switch (p.type) {
                case 'kick_neon':
                case 'fire':
                case 'void':
                case 'gold_dust':
                    ctx.fillStyle = pal[stage - 1];
                    ctx.fillRect(x, y, sq, sq);
                    break;
                case 'rainbow':
                    ctx.fillStyle = pal[p.seq % pal.length];
                    ctx.fillRect(x, y, sq, sq);
                    break;
                case 'stars':
                case 'ice':
                case 'hearts': {
                    if (stage === 3) {
                        const cells = p.type === 'hearts' ? SHAPES.heart : SHAPES.plus;
                        ctx.fillStyle = pal[2];
                        for (const c of cells) ctx.fillRect(x + (c[0] - 1) * G, y + (c[1] - 1) * G, G, G);
                    } else {
                        ctx.fillStyle = pal[stage - 1];
                        ctx.fillRect(x, y, G, G);
                    }
                    break;
                }
                default: {
                    // Doğal kabarcık: tek piksel, renk kademesiyle söner
                    ctx.fillStyle = ['#7fc6e8', '#bfe9ff', '#ffffff'][stage - 1];
                    ctx.fillRect(x, y, G, G);
                }
            }
        }
    }

    // Sprite çizici: 4px ızgarasına oturur, kontur da tam piksel hücresi
    drawSprite(ctx, sprite, cx, bottom, flip = false) {
        const px = sprite.px;
        const rows = sprite.rows;
        const len = rows[0].length;
        const left = Math.round((cx - (len * px) / 2) / 4) * 4;
        const top = Math.round((bottom - rows.length * px) / 4) * 4;
        const at = (r, c) => (r < 0 || r >= rows.length || c < 0 || c >= len) ? '.' : rows[r][flip ? len - 1 - c : c];

        ctx.fillStyle = '#000000';
        for (let r = -1; r <= rows.length; r++) {
            for (let c = -1; c <= len; c++) {
                if (at(r, c) !== '.') continue;
                if (at(r - 1, c) !== '.' || at(r + 1, c) !== '.' || at(r, c - 1) !== '.' || at(r, c + 1) !== '.') {
                    ctx.fillRect(left + c * px, top + r * px, px, px);
                }
            }
        }
        for (let r = 0; r < rows.length; r++) {
            for (let c = 0; c < len; c++) {
                const ch = at(r, c);
                if (ch !== '.') {
                    ctx.fillStyle = sprite.pal[ch] || '#ffffff';
                    ctx.fillRect(left + c * px, top + r * px, px, px);
                }
            }
        }
    }

    renderDecor(ctx, w, h, sandTop) {
        const id = this.equippedCosmetics.decor;
        if (!id || id === 'none') return;
        const S = AQUARIUM_SPRITES;
        const t = this.sceneTime || 0;
        const base = sandTop + 14;

        switch (id) {
            case 'coral':   this.drawSprite(ctx, S.coral,   w * 0.42, base); break;
            case 'anchor':  this.drawSprite(ctx, S.anchor,  w * 0.46, base); break;
            case 'chest':   this.drawSprite(ctx, S.chest,   w * 0.50, base); break;
            case 'castle':  this.drawSprite(ctx, S.castle,  w * 0.50, base); break;
            case 'bubbler': this.drawSprite(ctx, S.bubbler, w * 0.55, base); break;
            case 'crystal': this.drawSprite(ctx, S.crystal, w * 0.58, base); break;
            case 'lamp': {
                const cx = w * 0.62;
                this.drawSprite(ctx, S.lamp, cx, base);
                // Yanıp sönen fener ışığı (4px damalı dither, saydamlık yok)
                if (Math.floor(t * 1.5) % 2 === 0) {
                    const topY = Math.round((base - S.lamp.rows.length * S.lamp.px) / 4) * 4;
                    const lx = Math.round(cx / 4) * 4;
                    ctx.fillStyle = '#fff1a8';
                    for (let gx = 0; gx < 28; gx++) {
                        for (let gy = 0; gy < 3; gy++) {
                            if ((gx + gy) % 2 !== 0) continue;
                            ctx.fillRect(lx + 20 + gx * 4, topY + 8 + gy * 4, 4, 4);
                            ctx.fillRect(lx - 24 - gx * 4, topY + 8 + gy * 4, 4, 4);
                        }
                    }
                }
                break;
            }
            case 'jellyfish': {
                const frame = Math.floor(t * 2) % 2 === 0 ? S.jellyA : S.jellyB;
                const y = h * 0.38 + Math.round(Math.sin(t * 1.2) * 8 / 4) * 4;
                this.drawSprite(ctx, frame, w * 0.58, y);
                break;
            }
        }
    }

    renderCompanion(ctx, w, h, sandTop) {
        const id = this.equippedCosmetics.companion;
        if (!id || id === 'none') return;
        const S = AQUARIUM_SPRITES;
        const c = this.companionState;
        const t = c.t;

        if (id === 'starfish') {
            this.drawSprite(ctx, S.starfish, w * 0.72, sandTop + 44);
        } else if (id === 'crab') {
            const frame = Math.floor(t * 4) % 2 === 0 ? S.crabA : S.crabB;
            this.drawSprite(ctx, frame, c.x, sandTop + 38);
        } else if (id === 'seahorse') {
            const y = h * 0.5 + Math.round(Math.sin(t * 1.5) * 8 / 4) * 4;
            this.drawSprite(ctx, S.seahorse, w * 0.22, y);
        } else if (id === 'turtle') {
            const frame = Math.floor(t * 2) % 2 === 0 ? S.turtleA : S.turtleB;
            const y = h * 0.3 + Math.round(Math.sin(t * 0.9) * 8 / 4) * 4;
            this.drawSprite(ctx, frame, c.x, y, c.dir < 0);
        }
    }

    renderPixelBackground(ctx, w, h) {
        const T = AQUARIUM_THEMES[this.equippedCosmetics.theme] || AQUARIUM_THEMES.retro_ocean;
        const stops = [0.25, 0.55, 0.82, 1];

        let prevH = 0;
        for (let i = 0; i < 4; i++) {
            const bh = h * stops[i];
            ctx.fillStyle = T.bands[i];
            ctx.fillRect(0, prevH, w, bh - prevH);

            const ditherY = Math.round(bh / 4) * 4;
            ctx.fillStyle = T.dither[i];
            for (let x = 0; x < w; x += 8) {
                ctx.fillRect(x, ditherY - 8, 4, 4);
                ctx.fillRect(x + 4, ditherY - 4, 4, 4);
            }
            prevH = bh;
        }

        const sandH = 96;
        const sandTop = h - sandH;

        ctx.fillStyle = T.rock;
        this.drawPixelArch(ctx, 0, sandTop, Math.round(w * 0.35), Math.round(h * 0.65), T);
        ctx.fillStyle = T.rock;
        this.drawPixelReef(ctx, Math.round(w * 0.7), sandTop, Math.round(w * 0.3), Math.round(h * 0.7));

        this.drawPixelKelp(ctx, Math.round(w * 0.08), sandTop, 80, T.kelp[0]);
        this.drawPixelKelp(ctx, Math.round(w * 0.28), sandTop, 110, T.kelp[1]);
        this.drawPixelKelp(ctx, Math.round(w * 0.85), sandTop, 95, T.kelp[0]);

        ctx.fillStyle = '#000000';
        ctx.fillRect(0, sandTop, w, 4);
        ctx.fillStyle = T.sand;
        ctx.fillRect(0, sandTop + 4, w, sandH);

        ctx.fillStyle = T.sandDot;
        for (let y = sandTop + 12; y < h; y += 12) {
            for (let x = 0; x < w; x += 16) {
                const shift = ((y / 12) % 2) * 8;
                ctx.fillRect(x + shift, y, 4, 4);
            }
        }

        ctx.fillStyle = '#ffffff';
        for (let i = 0; i < 8; i++) {
            const sx = Math.round((w * (0.1 + i * 0.11)) / 4) * 4;
            const sy = sandTop + 24 + ((i % 3) * 16);
            ctx.fillRect(sx, sy, 6, 4);
            ctx.fillStyle = '#ff9800';
            ctx.fillRect(sx + 2, sy + 1, 2, 2);
            ctx.fillStyle = '#ffffff';
        }

        this.renderDecor(ctx, w, h, sandTop);
        this.renderCompanion(ctx, w, h, sandTop);
    }

    drawPixelArch(ctx, x, groundY, width, height, T) {
        const topY = groundY - height;
        const rock = (T && T.rock) || '#112d4e';
        ctx.fillStyle = rock;
        ctx.fillRect(x, topY, width, height);
        ctx.fillStyle = (T && T.hole) || '#20a39e';
        ctx.fillRect(x + Math.round(width * 0.35), topY + Math.round(height * 0.4), Math.round(width * 0.45), Math.round(height * 0.6));
        ctx.fillStyle = rock;
    }

    drawPixelReef(ctx, x, groundY, width, height) {
        const topY = groundY - height;
        ctx.fillRect(x + Math.round(width * 0.2), topY, Math.round(width * 0.6), height);
        ctx.fillRect(x, topY + Math.round(height * 0.3), width, Math.round(height * 0.7));
    }

    drawPixelKelp(ctx, x, groundY, height, color) {
        ctx.fillStyle = color;
        const segments = Math.floor(height / 12);
        for (let i = 0; i < segments; i++) {
            const sway = Math.round(Math.sin((this.fish.wiggleTimer * 0.8) + i * 0.6) * 1) * 4;
            ctx.fillRect(x + sway, groundY - (i * 12), 6, 10);
            // Yaprak
            ctx.fillRect(x + sway + ((i % 2 === 0) ? 6 : -6), groundY - (i * 12) + 2, 6, 4);
        }
    }

    // 8-Bit Bölgesel Piksel Yosun Lekeleri (Pixel Moss Blobs)
    renderPixelAlgaePatches(ctx) {
        if (this.algaePatches.length === 0) return;

        for (const patch of this.algaePatches) {
            const r = Math.round((patch.radius * patch.health) / 4) * 4;
            if (r <= 2) continue;

            const px = Math.round(patch.x / 4) * 4;
            const py = Math.round(patch.y / 4) * 4;

            // Piksel Daire Algoritması
            for (let dy = -r; dy <= r; dy += 4) {
                const rowWidth = Math.round(Math.sqrt(r * r - dy * dy) / 4) * 4;
                ctx.fillStyle = '#2e7d32'; // Ana yeşil
                ctx.fillRect(px - rowWidth, py + dy, rowWidth * 2, 4);

                // Piksel Benekler
                if (Math.abs(dy) < r * 0.6) {
                    ctx.fillStyle = '#1b5e20';
                    ctx.fillRect(px - Math.round(rowWidth * 0.5), py + dy, 4, 4);
                }
            }

            // Piksel Kontur
            ctx.strokeStyle = '#53fc18';
            ctx.lineWidth = 2;
            ctx.strokeRect(px - r, py - r, r * 2, r * 2);
        }
    }

    // 8-Bit Piksel Balık Çizimi
    renderPixelFish(ctx) {
        if (!this.fishImg) return;

        const f = this.fish;
        ctx.save();
        ctx.imageSmoothingEnabled = false;

        const fx = Math.round(f.x);
        const fy = Math.round(f.y);
        ctx.translate(fx, fy);

        const dir = f.facingRight ? 1 : -1;
        ctx.scale(dir * f.scale, f.scale);

        // 8-Bit Kademeli Yüzme Dalgalanması (Stepped bob & wiggle)
        const stepBob = Math.round(Math.sin(f.wiggleTimer * 2) * 2) * 2;
        const stepWiggle = Math.round(Math.sin(f.wiggleTimer * 3) * 2) * 0.04;
        ctx.translate(0, stepBob);
        ctx.rotate(stepWiggle);

        if (f.isSick) {
            ctx.filter = 'grayscale(80%)';
        }

        ctx.drawImage(
            this.fishImg,
            -this.fishData.width / 2,
            -this.fishData.height / 2,
            this.fishData.width,
            this.fishData.height
        );

        ctx.restore();

        // 8-Bit İsim Etiketi
        this.renderPixelStatusBadge(ctx);
    }

    renderPixelStatusBadge(ctx) {
        const f = this.fish;
        const badgeY = Math.round(f.y - (this.fishData ? this.fishData.height * 0.5 * f.scale : 40) - 16);

        ctx.save();
        ctx.textAlign = 'center';
        ctx.font = '10px "Press Start 2P", monospace';

        if (this.isGuestMode) {
            ctx.fillStyle = '#000000';
            ctx.fillText(`@${this.guestOwner}`, Math.round(f.x) + 2, badgeY + 2);
            ctx.fillStyle = '#00E5FF';
            ctx.fillText(`@${this.guestOwner}`, Math.round(f.x), badgeY);
        } else if (f.isSick) {
            ctx.fillStyle = '#000000';
            ctx.fillText('HASTA!', Math.round(f.x) + 2, badgeY + 2);
            ctx.fillStyle = '#ff4757';
            ctx.fillText('HASTA!', Math.round(f.x), badgeY);
        } else if (f.level >= f.maxLevel) {
            ctx.fillStyle = '#000000';
            ctx.fillText('★ OKYANUSA HAZIR ★', Math.round(f.x) + 2, badgeY + 2);
            ctx.fillStyle = '#ffd700';
            ctx.fillText('★ OKYANUSA HAZIR ★', Math.round(f.x), badgeY);
        } else {
            ctx.fillStyle = '#000000';
            ctx.fillText(`${this.fishData.name}`, Math.round(f.x) + 1, badgeY + 1);
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`${this.fishData.name}`, Math.round(f.x), badgeY);
        }

        ctx.restore();
    }

    drawPixelHeart(ctx, x, y) {
        ctx.fillStyle = '#ff0055';
        ctx.fillRect(x - 6, y - 4, 4, 4);
        ctx.fillRect(x + 2, y - 4, 4, 4);
        ctx.fillRect(x - 8, y, 16, 4);
        ctx.fillRect(x - 6, y + 4, 12, 4);
        ctx.fillRect(x - 4, y + 8, 8, 4);
        ctx.fillRect(x - 2, y + 12, 4, 4);
    }

    renderPixelGlassBorder(ctx, w, h) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 4;
        ctx.strokeRect(2, 2, w - 4, h - 4);
    }

    renderAscensionPortal(ctx, w, h) {
        ctx.save();
        const px = w - 80;
        const py = h * 0.4;

        ctx.fillStyle = '#53fc18';
        for (let r = 80; r > 10; r -= 10) {
            ctx.strokeStyle = r % 20 === 0 ? '#53fc18' : '#00e5ff';
            ctx.lineWidth = 4;
            ctx.strokeRect(px - r, py - r, r * 2, r * 2);
        }

        ctx.fillStyle = '#000';
        ctx.font = '16px "Press Start 2P", monospace';
        ctx.textAlign = 'center';
        ctx.fillText('OKYANUSA SALINIYOR...', w / 2 + 2, h * 0.2 + 2);
        ctx.fillStyle = '#53fc18';
        ctx.fillText('OKYANUSA SALINIYOR...', w / 2, h * 0.2);
        ctx.restore();
    }
}

window.PersonalAquarium = PersonalAquarium;
