// Aura Prompt Generator - Core Logic

// Default Titles (Traditional Chinese)
const DEFAULT_TITLES = [
  "主體 (Subject)", 
  "動作 (Action)", 
  "場景 (Setting)", 
  "風格 (Style)", 
  "情緒 (Mood)", 
  "色彩 (Colors)", 
  "構圖 (Composition)", 
  "細節 (Details)", 
  "相機 (Camera)", 
  "時間 (Time)", 
  "光照 (Lighting)", 
  "畫質 (Quality)"
];

// Default Contents
const DEFAULT_CONTENTS = {
  1: `anthropomorphic red panda DJ
tiny astronaut riding a corgi in space
steampunk goldfish in a mechanical bowl
gothic lolita raccoon drinking boba
cyberpunk capybara with neon sunglasses
victorian ghost cat wearing a top hat
samurai penguin slicing watermelons
fluffy alpaca wizard casting spells
1950s diner waitress T-rex
robot butler serving tea to a dragon
chubby unicorn eating ramen
pirate octopus with eight cutlasses
sleepy axolotl in a hammock
disco ball hedgehog dancing
mecha-squirrel piloting a nut-shaped robot
vampire hamster with tiny cape
cyber samurai shiba inu
grandma yeti knitting a scarf
astronaut sloth floating in zero gravity
kawaii toast with arms and legs
steampunk flamingo on a bicycle
tiny kraken in a coffee mug
retro robot feeding pigeons
punk rock pigeon with mohawk
magical girl raccoon transformation sequence
fox barista making latte art
jellyfish wearing sneakers
corgi knight riding a giant carrot
goth crow perched on a streetlamp
panda chef flipping burgers
cardboard robot falling in love
mermaid cat swimming in a fishbowl
cowboy beaver on a mechanical bull
neon frog on a skateboard
sleepy dragon curled around a pizza
tiny astronaut planting flag on a cookie
raccoon thief stealing moon cheese
victorian gentleman walrus with monocle
cyberpunk grandma with holographic walker
chubby phoenix reborn as a chicken nugget
otter detective in trench coat
steampunk turtle with gear shell
hamster pilot in a paper airplane
disco walrus under a mirror ball
samurai hamster with bamboo sword
ghost shark in a haunted aquarium
alpaca astronaut exploring cotton candy planet
tiny Godzilla made of gummy bears
penguin secret agent in tuxedo
fox wizard with glowing staff
cat wizard wearing starry robes
robot penguin sliding on ice
chameleon street artist painting itself
hedgehog barista with tiny espresso machine
cyberpunk tanuki with holographic tail
sleepy koala DJ wearing headphones
steampunk octopus librarian
raccoon astronaut planting trash on the moon
fluffy moth attracted to a neon lamp
axolotl mermaid princess
bunny knight with carrot sword
retro alien eating cereal
panda samurai meditating under bamboo
tiny kaiju kitten destroying a toy city
crow magician pulling coins from ears
sloth superhero in slow motion
ferret pirate with tiny ship
neon jellyfish DJ underwater rave
corgi wizard casting "fetch" spell
robot cat chasing laser pointer
gothic squirrel collecting acorns at midnight
astronaut hamster in a wheel spaceship
steampunk seahorse riding a bicycle
chubby dragon hoarding donuts
raccoon mechanic fixing a tiny car
penguin rockstar shredding guitar
cyberpunk owl with glowing eyes
sleepy red panda napping on a cloud
fox chef cooking tiny sushi
robot turtle winning a race in slow-mo
vampire bat barista at night
magical girl capybara with sparkly wand
tiny triceratops in a teacup
steampunk ladybug pilot
otter wizard floating on a lily pad
goth moth wearing black lace
panda astronaut eating bamboo on Mars
disco ball octopus at an underwater party
sleepy ghost bunny haunting a pillow
cyberpunk tanuki hacker
corgi samurai with wasabi blade
fluffy sheep cloud shepherd
raccoon wizard summoning trash magic
tiny astronaut riding a paper boat
neon axolotl dancing in the rain
robot flamingo standing on one leg forever
hedgehog knight with pinecone shield
sleepy dragon accountant
punk rock goldfish in a bowl mosh pit
happy little trash panda king wearing a crown of cans`,

  2: `breakdancing on a giant vinyl record
riding a rocket-powered skateboard
juggling flaming pineapples
surfing on a giant pizza slice
doing a backflip off a rainbow
playing electric guitar made of lightning
blowing massive bubblegum bubbles
riding a mechanical bull made of clouds
doing parkour across floating donuts
sword-fighting with a baguette
flying with a jetpack made of fireworks
headbanging at an underwater concert
drifting a tiny car around a teacup
casting a spell that turns everything into candy
crowd-surfing on floating pancakes
lassoing the moon with a jump rope
DJing with turntables made of pizza
riding a unicycle on a tightrope of spaghetti
doing the moonwalk on actual moon dust
breakdancing inside a snow globe
fighting a duel with oversized lollipops
skateboarding down a waterfall of soda
riding a shopping cart at supersonic speed
doing karate kicks in zero gravity
painting the sky with a giant paint roller
surfing inside a giant wave of ramen
playing drums on floating water lilies
doing a cannonball into a pool of glitter
riding a bicycle made of french fries
performing magic tricks with exploding cards
sliding down a rainbow like a slide
racing a tiny car against a cheetah
doing ballet on a giant spinning record
breakdancing on top of a moving train
riding a hoverboard through a candy storm
juggling tiny planets like marbles
doing a handstand on a floating cloud
skateboarding inside a giant hamster wheel
performing a guitar solo on a cloud
riding a pogo stick across lava
doing the worm across a field of flowers
surfing on a giant leaf in the wind
playing air guitar with actual lightning
riding a rollercoaster made of licorice
doing cartwheels through a field of bubbles
breakdancing on a giant lily pad
riding a scooter made of bubblegum
juggling chainsaws made of rainbows
doing a triple backflip into a pile of marshmallows
playing hopscotch on floating asteroids
riding a magic carpet made of pizza
doing the robot dance… as an actual robot
surfing on a giant wave of coffee
riding a skateboard pulled by tiny dragons
performing a slam dunk on a basketball hoop made of clouds
breakdancing on a giant spinning donut
doing parkour across giant floating books
riding a bicycle with square wheels (and it still works)
playing violin on a tightrope
doing the floss dance in a hurricane
surfing down a waterfall of melted chocolate
riding a jetpack made of soda cans
juggling glowing orbs of pure energy
doing a backflip over a sleeping dragon
breakdancing inside a giant snowflake
riding a tiny motorcycle up a candy cane
performing magic that makes stars explode into confetti
doing the macarena with a skeleton crew
surfing on a giant taco shell
riding a unicycle across a pool of lava
playing drums on exploding barrels
doing a handstand on a shooting star
skateboarding through a tunnel of neon rings
riding a pogo stick on the moon
breakdancing on a giant spinning vinyl in space
juggling tiny black holes
doing parkour on floating jellybeans
riding a rocket-powered shopping cart
performing a guitar solo while falling from the sky
surfing on a wave of pure glitter
doing the hustle in a disco volcano
riding a bicycle made of lightning bolts
playing hopscotch on clouds
breakdancing on a giant spinning pizza
doing a backflip into a pool of stars
riding a skateboard made of ice down a volcano
juggling flaming marshmallows
performing a drum solo on thunderclouds
surfing inside a giant bubble
doing cartwheels across Saturn’s rings
riding a tiny car through a fireworks show
breakdancing on a giant spinning top
playing electric guitar with teeth
doing the worm on a conveyor belt of sushi
riding a hoverboard through a cotton-candy storm
juggling tiny suns like hot potatoes
performing a magic trick that makes the moon wink
surfing on a giant wave of molten gold
doing a backflip off a giant rubber duck
crowd-surfing on a sea of floating corgis`,

  3: `neon-soaked Tokyo alley at midnight
glowing bioluminescent cave system
abandoned Soviet space station orbiting Earth
floating lantern festival over ancient rice fields
crystal palace inside a giant geode
rainy 1940s film-noir street with fedoras
endless library that stretches into infinity
post-apocalyptic Tokyo overtaken by cherry trees
inside a massive stained-glass whale
retro-futuristic 1950s diner on Mars
overgrown Mayan temple reclaimed by jungle
arctic research station during aurora borealis
underwater ruined Atlantis with glowing ruins
steampunk London with massive clockwork gears
candy kingdom made of gingerbread and gumdrops
foggy Victorian graveyard at midnight
floating Japanese torii gate in the clouds
cyberpunk night market with holographic food stalls
inside a giant hollow tree with fairy lights
abandoned amusement park at golden hour
surreal desert with giant floating mirrors
cozy hobbit-hole library with round windows
neon ramen shop during a rainstorm
ancient Greek temple on a stormy cliff
inside a snow globe being shaken
rooftop garden in a cyberpunk megacity
enchanted winter forest with glowing blue trees
pirate ship sailing through purple nebula
retro arcade glowing in the 1980s night
massive treehouse city connected by rope bridges
volcanic lava river with black glass islands
dreamy cotton-candy clouds with floating castles
abandoned subway station turned underground garden
giant aquarium hallway with sharks swimming overhead
mystical bamboo forest at sunrise
dystopian favela stacked to the sky
glowing mushroom valley under twin moons
art deco skyscraper penthouse at sunset
inside a massive hourglass with falling galaxies
haunted carnival frozen in time
floating market on a lilypad lake
cyber-samurai dojo with paper walls and holograms
endless staircase in a pink void
cozy witch’s cottage covered in vines
neon-lit skateboard park under overpass
ancient Egyptian tomb lit by torchlight
crystal cave with glowing underground lake
retro vaporwave mall with palm trees
massive greenhouse full of alien plants
rooftop pool party in a thunderstorm
inside a giant seashell palace underwater
abandoned cathedral with vines and birds
floating hot-air balloon city at dusk
cyberpunk laundromat at 3 a.m.
enchanted bookstore where books fly
icy palace throne room with aurora windows
desert ghost town with tumbleweeds and neon signs
inside a massive grandfather clock’s gears
glowing jellyfish forest underwater
retro roller rink with disco lights
hidden speakeasy behind a waterfall
overgrown rooftop jungle in a megacity
massive steampunk train cutting through clouds
candy cane forest in winter
abandoned space colony on a red planet
misty Scottish highlands with standing stones
inside a giant music box with dancing figurines
neon karaoke bar with holographic singers
floating sky whale migration
ancient Roman bathhouse with marble and steam
cyberpunk rooftop shrine with torii gates
endless cornfield with UFO lights above
cozy attic full of glowing fireflies
underwater disco with glowing sea creatures
massive library with rolling ladders and starlight
retro gas station in the middle of nowhere at night
giant lotus flower pond at twilight
abandoned toy factory with giant teddy bears
floating tea party in the stratosphere
cyberpunk fish market with holographic fish
hidden cave behind a waterfall with treasure
massive greenhouse on a spaceship
neon-lit bowling alley in the 1970s
ancient tree with doors leading to other worlds
rooftop cinema under the stars
inside a snow-covered lantern
cyberpunk tattoo parlor with glowing ink
floating pagoda temple in the clouds
abandoned opera house with velvet seats
giant bird’s nest city in the treetops
retro drive-in theater showing old monster movies
glowing ice cave with frozen waterfalls
candy-colored coral reef
steampunk submarine interior
hidden valley with dinosaur skeletons
neon-lit arcade crane game heaven
massive bubble floating through space
cozy rainforest treehouse during rain
cyberpunk shrine with glowing fox statues
endless marble hallway with mirrors and chandeliers`,

  4: `cinematic anamorphic lens
hyperrealistic 8k photography
detailed matte painting
studio lighting portrait
vibrant gouache illustration
retro 90s anime cel-shaded
octane render unreal engine
dreamlike surrealism
intricate art nouveau
dark moody baroque oil painting
soft pastel chalk drawing
cyberpunk vaporwave aesthetic
studio ghibli background art
gritty 35mm film grain
comic book ink and color
low-poly playstation 1 style
hyperdetailed zbrush sculpt
watercolor splash art
neon noir photography
golden hour national geographic
cute kawaii chibi style
retro pixel art 16-bit
dramatic caravaggio lighting
vibrant pop art roy lichtenstein
intricate steampunk blueprint
soft oil on canvas
epic fantasy book cover art
pastel dreamcore aesthetic
brutalist architecture render
holographic iridescent material
detailed colored pencil
moody cyberpunk blade runner
whimsical children’s book illustration
high-fashion editorial photography
retrofuturism 1960s
intricate mandala art
dark gothic victorian painting
vibrant acrylic pour art
isometrics cozy pixel art
macro photography close-up
soft studio ghibli watercolor
bold graffiti street art
dreamy double exposure
hyperrealistic wildlife photography
retro anime 80s ova
intricate henna tattoo style
luminous ethereal digital painting
gritty war photography
cute sanrio-style illustration
dramatic renaissance portrait
vibrant synthwave aesthetic
detailed mechanical blueprint
soft pastel anime key visual
cinematic 70mm film still
intricate fantasy map art
moody monochrome ink wash
vibrant risograph print
hyperdetailed sci-fi concept art
cozy cottagecore aesthetic
bold woodblock print style
glowing neon sign photography
intricate art deco illustration
soft storybook watercolor
dramatic low-key photography
retro vhs glitch art
detailed botanical illustration
epic norse saga painting
dreamy lofi aesthetic
hyperrealistic food photography
intricate tarot card art
vibrant miami vice pastel
soft impasto oil painting
detailed dungeon map style
cinematic imax establishing shot
cute felted wool art
dark horror comic style
vibrant afrofuturism
soft pastel chalk portrait
hyperdetailed miniature model
retro space age illustration
intricate stained glass window
moody dutch masters lighting
vibrant psychedelic 60s poster
detailed character turnaround sheet
soft golden hour portrait
cyberpunk tokyo street photography
intricate celtic knot work
cute pusheen-style doodle
dramatic chiaroscuro lighting
vibrant fauvism colors
detailed medical illustration style
soft anime screenshot
epic wlop digital painting
retro propaganda poster
intricate paper cutout art
moody rain-soaked noir
vibrant holographic foil
detailed fantasy token art
soft children’s picture book
ultra-sharp macro lens photography`,

  5: `pure unfiltered joy
quiet melancholy at 3 a.m.
electric anticipation
cozy rainy afternoon
hauntingly beautiful
chaotic carnival energy
soft golden nostalgia
icy existential dread
mischievous grin
warm summer night romance
epic last-stand heroism
dreamy lucid-dream haze
playful childhood wonder
sinister smile in the dark
serene floating zen
explosive neon euphoria
lonely neon street
heartwarming hug energy
foreboding storm approaching
whimsical fairy-tale magic
bittersweet goodbye
triumphant sunrise
cold cosmic horror
cheeky tongue-out mischief
soft candlelit intimacy
adrenaline-fueled chaos
peaceful snowfall silence
dark velvet gothic
hopeful dawn after apocalypse
eerie abandoned playground
vibrant festival madness
tender first-kiss nerves
majestic mountain solitude
creepy children’s laughter
cozy blanket fort vibes
rebellious punk energy
melancholic piano notes
sparkling holiday magic
tense showdown at dusk
carefree summer road-trip
ghostly whispers
warm bakery smell comfort
surreal liminal space
victorious battle roar
soft lullaby calm
ominous red moonlight
bubbly champagne celebration
nostalgic VHS static
mysterious fog-shrouded
pure chaotic gremlin energy
gentle morning dew
dark fairytale dread
radiant angelic glow
sleepy Sunday laziness
electric concert crowd rush
tragic fallen hero
playful snowball fight
hauntingly empty mall
warm hearth storytelling
apocalyptic red sky
cheeky wink and smirk
quiet library reverence
explosive fireworks joy
cold abandoned hospital
dreamy cotton-candy skies
fierce warrior pride
soft pastel serenity
unsettling smile
vibrant street-market bustle
tender slow-dance moment
epic dragon-roar power
lonely train-station goodbye
mischievous cat energy
cozy thunderstorm inside
ominous thunder rumble
sparkling magical girl transformation
nostalgic arcade glow
cold starlit wonder
chaotic kitchen disaster
gentle forest breathing
dark carnival laughter
hopeful sunrise silhouette
playful bubble-popping
eerie doll collection
warm hot-chocolate comfort
rebellious graffiti night
dreamy star-gazing peace
intense duel tension
soft cherry-blossom romance
sinister shadow play
triumphant flag-planting
quiet snowfall solitude
vibrant festival colors
heartbreaking farewell
mischievous prank setup
cozy knit-sweater hug
foreboding eclipse shadow
pure childhood glee
haunting melody in the wind
radiant golden hope`,

  6: `warm golden hour glow
cool teal and cyan neon
vibrant hot pink and electric lime
soft pastel peach and mint
rich amber and burnt orange
high-contrast crimson and obsidian
deep forest emerald and moss
sunset magenta and tangerine
icy arctic blue and silver
vintage faded sepia
bold primary red yellow blue
desaturated noir shadows
dreamy lavender and baby blue
full-spectrum rainbow prism
royal gold and midnight blue
cotton-candy pink and sky blue
toxic acid green and purple
warm caramel and cream
cyberpunk magenta and teal
autumn maple red and gold
monochrome high-key white
deep burgundy and brass
soft sage green and blush
electric violet and lime
desert ochre and terracotta
polar midnight blue and aurora green
retro 80s miami pink and turquoise
muted olive and dusty rose
fiery inferno red and charcoal
frosted pastel lilac and mint
holographic rainbow foil shift
warm honey and chocolate brown
cold steel gray and frost blue
neon acid yellow and magenta
earthy sienna and umber
twilight purple and indigo
soft beige and warm gray
toxic slime green and black
golden champagne bubbles
deep ocean teal and navy
candy apple red and bubblegum pink
vintage polaroid fade
electric cobalt and hot orange
mossy green and mushroom brown
rose gold and soft pearl
apocalyptic orange haze
soft butter yellow and cream
ultraviolet and radioactive green
warm terracotta and sand
icy mint and pale aqua
blood red and pitch black
cotton-candy sunset gradient
rich velvet purple and gold
faded denim blue and white
lime green and fuchsia shock
warm cinnamon and nutmeg
monochrome cool gray tones
tropical coral and turquoise
deep wine red and emerald
soft peach and vanilla
neon nightlife cyan and magenta
harvest moon orange and purple
arctic white and pale blue
retro arcade purple and teal
soft lavender and sage
fiery phoenix orange and red
muted khaki and dust
electric sapphire and gold
warm mahogany and ivory
cold glacier blue and white
psychedelic rainbow swirl
soft rose quartz and serenity
dark emerald and onyx
sunrise coral and lemon
vintage amber and sepia
hot neon pink and green
earthy clay red and ochre
dreamy periwinkle and cream
stark black and acid yellow
golden wheat and sky blue
deep amethyst and silver
soft ballet pink and gray
toxic purple and lime
warm cedar and pine green
icy lavender and frost
bold cherry red and teal
muted mushroom and taupe
sunset sherbet orange and pink
cold steel and electric blue
rich sapphire and gold leaf
pastel unicorn rainbow
burnt sienna and charcoal
soft seafoam and pearl
neon coral and violet
warm latte and mocha
arctic aurora green and purple
candy floss pink and mint
deep indigo and starlight silver
fiery scarlet and gold
gentle dawn pink and soft gold`,

  7: `perfect rule of thirds
dead-center symmetry
dramatic golden spiral
strong leading lines to subject
frame-within-a-frame
extreme negative space minimalism
aggressive dutch angle tilt
extreme macro close-up
high-angle bird’s-eye view
low-angle heroic perspective
perfect mirror reflection symmetry
balanced color-block composition
chaotic overlapping elements
radial circular composition
tall vertical panoramic
stable triangular formation
elegant asymmetrical balance
flowing S-curve
deep layered foreground-midground-background
fibonacci spiral placement
centered subject with radial blur
off-center rule of thirds drama
worm’s-eye view looking straight up
perfect golden ratio
cinematic wide establishing shot
intimate over-the-shoulder
dynamic diagonal split
symmetrical top-down flat lay
environmental portrait with context
extreme fisheye distortion
tight headshot with shallow depth
perfect bilateral symmetry
leading lines converging on horizon
bold central vanishing point
layered parallax depth
dramatic silhouette against bright background
circular vignette focus
chaotic collage-style overlap
strong vertical thirds
heroic worm’s-eye skyscraper angle
soft balanced pastel blocks
spiral staircase perspective
perfect reflection over water
extreme telephoto compression
minimalist subject in vast emptiness
dynamic action frozen on diagonal
symmetrical architectural lines
playful tilted horizon
golden triangle composition
intimate close-up with bokeh
top-down food-flat-lay style
cinematic anamorphic widescreen
perfect mandala radial symmetry
subject breaking the frame
strong foreground element framing
dramatic low-key spotlight
panoramic landscape stitch
chaotic double-exposure overlay
elegant figure-to-ground contrast
extreme macro detail shot
symmetrical butterfly layout
dynamic motion blur trails
perfect centered frontal portrait
leading eye through curved path
high-contrast chiaroscuro framing
subject placed on golden ratio point
bold graphic negative space
dramatic upward perspective
soft balanced pastel symmetry
layered depth with atmospheric haze
extreme wide-angle distortion
perfect horizon-third sky emphasis
playful upside-down composition
cinematic dolly-zoom effect
strong diagonal tension
intimate side-profile silhouette
radial sunburst lines
chaotic street-photography layering
perfect architectural symmetry
subject emerging from darkness
golden spiral galaxy effect
minimalist one-point perspective
dynamic jump-action freeze
soft vignette corner focus
symmetrical reflection infinity
bold color-block mondrian style
extreme close-up texture study
cinematic letterbox bars
perfect centered mandala
chaotic motion-panning blur
dramatic backlit rim lighting
layered foreground bokeh orbs
strong graphic S-shape
intimate environmental portrait
perfect flat-lay symmetry
extreme low-angle power shot
dreamy double-exposure portrait
balanced triangular subject grouping
cinematic tracking-shot motion
pure minimalist zen space`,

  8: `ultra-sharp skin pores and freckles
soft creamy bokeh orbs
floating golden dust motes
raindrops sliding down glass
dramatic volumetric god rays
sparkling firefly lights
intricate embroidered fabric
subtle film grain overlay
thick rolling fog layers
glowing holographic runes
polished brass gears turning
falling sakura petals in wind
razor-sharp depth of field
cinematic lens flare streaks
wet cobblestone reflections
ancient stone carvings covered in moss
flowing silk ribbons in breeze
swirling smoke tendrils
delicate frost patterns on glass
flickering neon sign reflections
tiny water droplets on fur
glowing embers floating upward
intricate tattoo linework
soft feather details and down
dew-covered spiderwebs
iridescent butterfly wing scales
cracked old paint texture
floating dandelion seeds
realistic sweat beads
shimmering heat haze distortion
delicate lace and embroidery
glowing circuit board traces
rain-soaked hair strands
tiny snowflakes on eyelashes
molten metal drips
soft knit sweater texture
realistic eye reflections
falling autumn leaves mid-air
subtle chromatic aberration
candle wax drips
intricate henna patterns
floating soap bubbles
cracked marble veins
soft velvet fabric folds
bioluminescent mushroom glow
tiny floating pollen grains
realistic leather grain
glowing mana particles
frost breath in cold air
dripping candle wax
ultra-detailed fur strands
soft morning mist layers
realistic tear droplets
glowing fire sparks
delicate paper lantern light
wet asphalt reflections
intricate clockwork internals
floating cherry blossom storm
subtle light caustics underwater
realistic wood grain texture
tiny glittering stardust
soft cotton candy fibers
glowing lava cracks
realistic bubble reflections
soft feather boa strands
intricate stained-glass shards
falling confetti mid-air
realistic wet nose shine
soft wool yarn texture
glowing fairy wing veins
tiny floating ash particles
realistic glass condensation
soft flower petal veins
molten gold drips
intricate circuitry glow
soft fluffy cloud texture
realistic rain-streaked windows
glowing mushroom spores
delicate frost flowers
tiny floating lantern lights
realistic denim weave
soft satin sheen
glowing rune-etched metal
falling rose petals
realistic candy wrapper crinkle
soft moss covering stone
tiny glowing plankton
realistic cracked ice surface
soft chiffon fabric movement
glowing holographic shards
falling snow caught in light
realistic marble swirl patterns
soft dandelion fluff
tiny soap bubble iridescence
glowing ember trails
intricate scale mail texture
soft morning dew on grass
realistic wet paint drips
glowing fiber-optic strands
delicate sugar crystal sparkle`,

  9: `14 mm ultra-wide angle
85 mm creamy portrait lens
50 mm nifty-fifty prime
100 mm macro extreme close-up
8 mm fisheye distortion
200 mm telephoto compression
cinematic anamorphic widescreen
tilt-shift miniature fake
vintage Helios 44-2 swirly bokeh
35 mm street-photography snap
drone top-down aerial
Hasselblad medium-format look
iPhone 15 Pro casual snapshot
Polaroid SX-70 instant film
30-second long exposure
split-diopter foreground-background sharp
Petzval lens dreamy swirl
70-200 mm zoom isolation
12 mm ultra-wide architectural
135 mm telephoto portrait
vintage Kodak Portra 400 film
Fujifilm Superia 800 grain
GoPro hero wide fisheye action
24 mm cinematic wide
400 mm wildlife compression
Lomography purple chromatic aberration
Canon 50 mm f/1.2 bokeh balls
phone vertical 9:16 video look
1970s 8 mm home movie
Red cinema camera epic look
28 mm environmental portrait
600 mm super-telephoto moon shot
disposable camera flash aesthetic
16 mm ultra-wide cinematic
vintage 35 mm slide film
85 mm anamorphic oval bokeh
thermal imaging camera
night-vision green glow
1950s Technicolor vibrance
24-70 mm zoom versatility
macro water-droplet refraction
soft-focus glamour lens
Game Boy Camera pixel style
security-camera CCTV grain
300 mm sports sideline
vintage Daguerreotype
40 mm pancake lens casual
18 mm super-wide interior
lensbaby selective focus
4×5 large-format sharpness
1970s TV news camera
15 mm fisheye full circle
Sony A7S III low-light look
135 mm batis dreamy portrait
vintage Agfa film colors
10-minute star-trail exposure
50 mm summilux glow
drone cinematic reveal shot
90 mm macro flat lay
1950s Kodak Ektachrome
iPhone night-mode long exposure
21 mm super-wide street
vintage Russian lens flares
500 mm mirror lens doughnut bokeh
360° little planet effect
43 mm normal human eye
150-600 mm wildlife reach
vintage Cine-Kodak 16 mm
55 mm vintage TV lens
25 mm cinematic prime
1970s Instamatic flash cube
11 mm ultra-wide rectilinear
58 mm noctilux glow wide open
4K phone gimbal smooth
80 mm tilt-shift architecture
180° fisheye skate video
40 mm street reportage
300 mm f/2.8 sports bokeh
vintage Polaroid 600 color shift
17 mm tilt-shift cityscape
50 mm f/0.95 Chinese lens glow
8 mm vintage super-8 film
200-600 mm moon detail
35 mm summicron street king
1990s camcorder VHS look
100 mm f/2.8 macro sharpness
70 mm IMAX punch
14-24 mm ultra-wide interiors
vintage Contax T2 point-and-shoot
800 mm super-telephoto wildlife
20 mm astrophotography wide
50 mm planar clinical sharpness
1998 disposable waterproof camera
135 mm telephoto portrait cream
40 mm voigtländer snapshot skopar
28-70 mm workhorse zoom look
15 mm laowa zero-distortion
1970s Kodak Gold 200 warmth
85 mm f/1.4 portrait king
5 mm full-frame fisheye madness`,

  10: `golden hour just before sunset
blue hour city lights turning on
harsh midday equatorial sun
midnight under a full moon
stormy overcast with dramatic clouds
soft early-morning fog
neon-soaked rainy night
warm candlelit evening
fiery sunrise with red sky
starry night with visible Milky Way
gentle rainy afternoon
peak autumn foliage colors
raging winter blizzard
cherry blossoms at full spring bloom
brutal noon desert sun
total solar eclipse corona
flickering firelit cave
misty dawn with golden mist
blood-red full moon night
pastel sunset beach silhouette
crisp winter morning frost
humid summer twilight
aurora borealis dancing overhead
soft pink cotton-candy sunrise
pitch-black new-moon night
heavy thunderstorm with lightning
golden autumn afternoon light
snowy silent night
first light hitting mountain peaks
neon 3 a.m. empty streets
soft spring morning dew
harsh winter noon low sun
purple twilight with city glow
foggy autumn graveyard
warm summer night fireflies
icy blue polar night
dramatic pre-storm green sky
gentle snowfall at dusk
vibrant summer solstice sunset
cold winter dawn with pink sky
midnight city rooftop party lights
soft pastel winter sunrise
intense equatorial golden hour
lunar eclipse red moon
warm lantern-lit festival night
crisp fall morning with fog
stormy sea at twilight
first spring sun after rain
midnight meteor shower
soft overcast winter light
golden autumn forest light
humid jungle dawn chorus
blue hour mountain silhouette
harsh summer cicada noon
snowy moonlit forest
soft peach spring sunset
dramatic thunderstorm sunset
quiet winter twilight
vibrant tropical sunrise
foggy winter sunrise
neon midnight ramen shop
soft lavender dusk
intense red desert sunset
gentle spring rain at golden hour
polar summer midnight sun
crisp autumn sunrise
stormy night with city lights
soft winter candlelight
blood moon rising
warm summer evening barbecue
icy blue hour arctic
gentle autumn rain
dramatic eclipse totality
soft spring cherry-blossom morning
midnight northern lights peak
golden winter afternoon low sun
humid monsoon dawn
soft pastel winter dusk
vibrant summer festival sunset
quiet snowy dawn
neon rainy blue hour
crisp spring morning light
intense summer storm light
soft autumn twilight
midnight summer heat lightning
gentle winter sunrise glow
dramatic red sunrise
soft foggy spring morning
harsh winter whiteout
warm summer night balcony
blue hour snowy city
golden autumn vineyard light
soft spring petal storm
intense eclipse diamond ring
quiet winter full-moon night
vibrant summer solstice light
gentle autumn morning mist
dramatic winter storm sunset
soft cherry-blossom twilight
perfect golden-hour magic light`,

  11: `soft north-window natural light
dramatic golden-hour rim light
harsh midday overhead sun
piercing volumetric god rays
multicolored neon club lights
warm 3200K tungsten glow
cold fluorescent office tubes
classic cinematic three-point lighting
pure backlit silhouette
golden-hour side-light magic
icy blue moonlight only
vibrant colored gel spotlights
practical table-lamp glow
flickering torch and firelight
underwater caustic ripples
giant studio softbox diffusion
hard on-camera flash
soft foggy diffused daylight
sparkling sparkler trails
single dramatic streetlamp
warm candlelight flicker
harsh desert flashbulb sun
neon sign reflections
soft overcast flat light
red emergency flare glow
cool LED strip lighting
cinematic practical car headlights
golden practical fireplace
blue hour city ambience
hard key light with no fill
warm Edison bulb string lights
dappled forest sunlight
harsh stadium floodlights
soft beauty dish portrait
red-darkroom safelight
cool practical TV screen glow
dramatic low-key single source
rainbow prism light streaks
soft window light with venetian blinds
cold interrogation spotlight
warm practical lantern light
bioluminescent natural glow
harsh noon equatorial sun
soft rim light hair glow
practical phone flashlight
vibrant stage concert lights
cool moonlight through trees
warm practical bedside lamp
hard flash with colored gels
soft golden-hour backlight
eerie green security light
dramatic overhead practical bulb
soft pastel sunset light
cold practical fridge light
warm practical campfire
hard rim light from behind
practical neon bar signs
soft practical window backlight
harsh construction floodlight
warm practical oil-lamp glow
cool practical aquarium light
dramatic single candle
soft practical fairy-light bokeh
hard flash freeze motion
warm practical sunrise through leaves
cold practical subway fluorescents
vibrant practical disco ball spots
soft practical paper-lantern glow
harsh practical welding spark
golden practical magic-hour edge light
cool practical moonlight fog
warm practical vintage bulb
hard practical spotlight beam
soft practical over-the-shoulder window
dramatic practical car interior light
cold practical hospital overhead
warm practical sunset lens flare
practical practical lighter flame
soft practical string-light portrait
harsh practical interrogation lamp
cool practical neon underglow
warm practical hearth fire
volumetric practical smoke beams
soft practical golden reflector bounce
hard practical paparazzi flash
cold practical icy blue rim
warm practical practical sunrise
dramatic practical single match light
soft practical diffused skylight
vibrant practical laser show
harsh practical desert noon
cool practical moonlight silhouette
warm practical practical candle cluster
soft practical practical window grid
hard practical practical strobe freeze
golden practical practical low sun
cold practical practical northern lights
warm practical practical practical fairy dust
dramatic practical practical key light only
perfect golden-hour cinematic glow`,

  12: `masterpiece
best quality
ultra-detailed
8k resolution
absurdres
sharp focus
intricate details
extremely detailed
hyperdetailed
insanely detailed
maximum detail
cinematic masterpiece
flawless
award-winning
trending on artstation
unreal engine 5
octane render
professional
studio quality
crisp quality
perfect anatomy
no artifacts
clean lines
rich colors
vibrant yet natural
depth of field
photorealistic
hyperrealistic
4k HDR
ultra-sharp
razor-sharp
maximum clarity
perfect proportions
exquisite detail
national geographic level
sony a1 quality
cinematic lighting
volumetric atmosphere
breathtaking
epic composition
highly polished
official art
illustration masterpiece
anime key visual
ultra highres
god-tier details
best shadow detail
best highlight detail
professional photography
museum quality
gallery worthy
stunningly beautiful
jaw-dropping
awe-inspiring
magnificent
superior quality
top-tier
world-class
legendary
iconic
timeless masterpiece
perfect render
zero noise
crystal clear
pin-sharp
unbelievably detailed
mind-blowing quality
next-level
godlike
absolute perfection
insane detail
unmatched quality
peak aesthetics
visual perfection
ultimate detail
ultra-premium
cinematic perfection
best of the best
unreal quality
divine
ethereal beauty
perfect in every way
flawless execution
pure excellence
ultimate masterpiece
absolute unit
god-tier render
peak performance
insane clarity
perfection achieved
unreal detail level
divine intervention
holy grail quality
legendary tier
final boss of images
100% juice
pure fire
certified banger
maximum fidelity
zero imperfections
pristine quality
ludicrous detail
uncompromising sharpness`
};

const DEFAULT_ALWAYS_TAGS = [
  "masterpiece",
  "best quality",
  "ultra-detailed",
  "8k resolution",
  "sharp focus",
  "intricate details",
  "cinematic lighting",
  "vibrant colors"
];

// App State
let state = {
  columnCount: 12,
  generateCount: 1,
  columns: [], // { id: number, title: string, content: string, active: boolean }
  alwaysTags: [], // { id: number, text: string, enabled: boolean, position: string }
  settings: {
    useTitles: true,
    useComma: true
  }
};

// Storage prefix
const STORAGE_PREFIX = "aura_pg_";

// Modal Promises Resolvers
let modalResolver = null;
let modalHideTimeout = null;  // tracks the 250ms hide timer to prevent race conditions
let alwaysDraggedRow = null;  // tracks dragged always-tag row

// Currently selected category tab ("__all__" = show every column)
let activeCategoryTab = "__all__";
const UNCATEGORIZED_LABEL = "未分類";

// Multi-select for group drag reordering
let selectedColumnIds = new Set();
let dragGroupIds = null;   // ids currently being dragged (1 or many)
let dropTarget = null;     // { colId, position: 'before' | 'after' }

// Ensure a column object has category/priority fields (for old/imported data)
function ensureColumnDefaults(col) {
  if (typeof col.category !== "string") col.category = "";
  if (typeof col.priority !== "number" || isNaN(col.priority)) col.priority = 0;
  return col;
}

// Unique list of categories currently in use, in first-appearance order
function getCategoryList() {
  const seen = [];
  state.columns.forEach(col => {
    const cat = col.category || "";
    if (!seen.includes(cat)) seen.push(cat);
  });
  return seen;
}

// Columns to display for the active tab, sorted by priority (highest first)
function getVisibleSortedColumns() {
  const filtered = activeCategoryTab === "__all__"
    ? state.columns.slice()
    : state.columns.filter(c => (c.category || "") === activeCategoryTab);

  return filtered
    .map((col, i) => ({ col, i }))
    .sort((a, b) => (b.col.priority || 0) - (a.col.priority || 0) || a.i - b.i)
    .map(x => x.col);
}

// Reassign priority values so that `orderedCols` (top-to-bottom) sorts back
// into that same order next render. Only touches columns in the current view.
function reassignPriorityFromOrder(orderedCols) {
  const n = orderedCols.length;
  orderedCols.forEach((col, i) => {
    col.priority = n - i;
  });
}

// Compute the final order after dropping the dragged group next to dropTarget,
// then convert that order into priority values.
function finalizeGroupDrop() {
  if (!dragGroupIds || !dropTarget) {
    dragGroupIds = null;
    dropTarget = null;
    return;
  }
  if (dragGroupIds.includes(dropTarget.colId)) {
    // Dropped onto a member of its own group - no-op
    dragGroupIds = null;
    dropTarget = null;
    return;
  }

  const view = getVisibleSortedColumns();
  const groupSet = new Set(dragGroupIds);

  // Preserve the dragged items' relative order as they currently appear
  const groupCols = view.filter(c => groupSet.has(c.id));
  const remaining = view.filter(c => !groupSet.has(c.id));

  const targetIdx = remaining.findIndex(c => c.id === dropTarget.colId);
  if (targetIdx === -1) {
    dragGroupIds = null;
    dropTarget = null;
    return;
  }
  const insertIdx = dropTarget.position === "before" ? targetIdx : targetIdx + 1;

  remaining.splice(insertIdx, 0, ...groupCols);
  reassignPriorityFromOrder(remaining);

  saveStateToStorage();
  dragGroupIds = null;
  dropTarget = null;
  renderAll();
  autoGenerate();
}

// Update the "N selected" badge + clear-selection button visibility
function updateSelectionBadge() {
  const count = selectedColumnIds.size;
  if (elements.selectedColsBadge) {
    elements.selectedColsBadge.style.display = count > 0 ? "inline-flex" : "none";
    elements.selectedColsBadge.textContent = `已選取 ${count} 個`;
  }
  if (elements.btnClearSelection) {
    elements.btnClearSelection.style.display = count > 0 ? "inline-flex" : "none";
  }
}

// Initialize Elements
document.addEventListener("DOMContentLoaded", () => {
  initElements();
  loadStateFromStorage();
  bindGlobalEvents();
  
  // Init clipboard body class
  if (getClipboard()) document.body.classList.add("has-clipboard");
  
  // Render initially
  renderAll();
});

// Cache elements
let elements = {};
function initElements() {
  elements = {
    colCountInput: document.getElementById("colCountInput"),
    decColCount: document.getElementById("decColCount"),
    incColCount: document.getElementById("incColCount"),
    genCountInput: document.getElementById("genCountInput"),
    decGenCount: document.getElementById("decGenCount"),
    incGenCount: document.getElementById("incGenCount"),
    btnPrefill: document.getElementById("btnPrefill"),
    btnAddNewCol: document.getElementById("btnAddNewCol"),
    btnEmptyContent: document.getElementById("btnEmptyContent"),
    btnClearTitles: document.getElementById("btnClearTitles"),
    toggleTitles: document.getElementById("toggleTitles"),
    toggleComma: document.getElementById("toggleComma"),
    presetSelect: document.getElementById("presetSelect"),
    btnLoadPreset: document.getElementById("btnLoadPreset"),
    btnSavePreset: document.getElementById("btnSavePreset"),
    btnExportPresets: document.getElementById("btnExportPresets"),
    btnImportPresetsTrigger: document.getElementById("btnImportPresetsTrigger"),
    importFileInput: document.getElementById("importFileInput"),
    btnDeletePreset: document.getElementById("btnDeletePreset"),
    activeColsBadge: document.getElementById("activeColsBadge"),
    selectedColsBadge: document.getElementById("selectedColsBadge"),
    btnClearSelection: document.getElementById("btnClearSelection"),
    columnsGrid: document.getElementById("columnsGrid"),
    categoryTabsBar: document.getElementById("categoryTabsBar"),
    categoryDatalist: document.getElementById("categoryDatalist"),
    alwaysTagsGrid: document.getElementById("alwaysTagsGrid"),
    btnAddAlwaysTag: document.getElementById("btnAddAlwaysTag"),
    btnGenerate: document.getElementById("btnGenerate"),
    btnCopyText: document.getElementById("btnCopyText"),
    btnCopyJson: document.getElementById("btnCopyJson"),
    outputsGrid: document.getElementById("outputsGrid"),
    
    // Modal
    customModal: document.getElementById("customModal"),
    modalTitle: document.getElementById("modalTitle"),
    modalMessage: document.getElementById("modalMessage"),
    modalInput: document.getElementById("modalInput"),
    modalCancelBtn: document.getElementById("modalCancelBtn"),
    modalConfirmBtn: document.getElementById("modalConfirmBtn"),
    modalCloseX: document.getElementById("modalCloseX"),
    
    toastContainer: document.getElementById("toastContainer"),
    
    // Portable Pack
    btnExportPortable: document.getElementById("btnExportPortable"),
    btnImportPortableTrigger: document.getElementById("btnImportPortableTrigger"),
    portableFileInput: document.getElementById("portableFileInput"),

    // Single preset export
    btnExportSinglePreset: document.getElementById("btnExportSinglePreset"),

    // New features
    btnResetDefault:       document.getElementById("btnResetDefault"),
    btnDuplicatePreset:    document.getElementById("btnDuplicatePreset"),
    colJumpSelect:         document.getElementById("colJumpSelect"),
    btnToggleAllActive:    document.getElementById("btnToggleAllActive"),
    btnToggleAllNoRepeat:  document.getElementById("btnToggleAllNoRepeat"),

    // FAB quick copy
    fabQuickCopy:  document.getElementById("fabQuickCopy"),
    fabPreviewText: document.getElementById("fabPreviewText"),
    fabCopyBtn:    document.getElementById("fabCopyBtn"),
    fabCloseBtn:   document.getElementById("fabCloseBtn")
  };
}

// Global Event Listeners
function bindGlobalEvents() {
  // Steppers
  elements.decColCount.addEventListener("click", () => adjustColCount(-1));
  elements.incColCount.addEventListener("click", () => adjustColCount(1));
  elements.colCountInput.addEventListener("change", (e) => {
    let val = parseInt(e.target.value);
    if (isNaN(val)) val = 12;
    setColCount(val);
  });
  
  elements.decGenCount.addEventListener("click", () => adjustGenCount(-1));
  elements.incGenCount.addEventListener("click", () => adjustGenCount(1));
  elements.genCountInput.addEventListener("change", (e) => {
    let val = parseInt(e.target.value);
    if (isNaN(val)) val = 1;
    setGenCount(val);
  });
  
  // Top Buttons
  elements.btnPrefill.addEventListener("click", prefillDefault);
  elements.btnAddNewCol.addEventListener("click", addNewColumn);
  elements.btnResetDefault.addEventListener("click", resetToDefault);
  elements.btnEmptyContent.addEventListener("click", emptyAllContents);
  elements.btnClearTitles.addEventListener("click", clearAllTitles);
  
  // Header Quick Column Toggles
  if (elements.btnToggleAllActive) {
    elements.btnToggleAllActive.addEventListener("click", toggleAllActive);
  }
  if (elements.btnToggleAllNoRepeat) {
    elements.btnToggleAllNoRepeat.addEventListener("click", toggleAllNoRepeat);
  }
  if (elements.btnClearSelection) {
    elements.btnClearSelection.addEventListener("click", () => {
      selectedColumnIds.clear();
      renderColumnsGrid();
      updateSelectionBadge();
    });
  }
  
  // Settings switches
  elements.toggleTitles.addEventListener("change", (e) => {
    state.settings.useTitles = e.target.checked;
    saveStateToStorage();
    autoGenerate();
  });
  elements.toggleComma.addEventListener("change", (e) => {
    state.settings.useComma = e.target.checked;
    saveStateToStorage();
    autoGenerate();
  });
  
  // Preset Controls
  elements.btnLoadPreset.addEventListener("click", loadSelectedPreset);
  elements.btnSavePreset.addEventListener("click", saveCurrentPreset);
  elements.btnExportPresets.addEventListener("click", exportPresetsToFile);
  elements.btnImportPresetsTrigger.addEventListener("click", () => elements.importFileInput.click());
  elements.importFileInput.addEventListener("change", importPresetsFromFile);
  elements.btnDeletePreset.addEventListener("click", deleteSelectedPreset);
  
  // Single preset export
  elements.btnExportSinglePreset.addEventListener("click", exportSinglePreset);

  // Preset duplicate
  elements.btnDuplicatePreset.addEventListener("click", duplicateSelectedPreset);

  // Column jump select
  elements.colJumpSelect.addEventListener("change", (e) => {
    const colId = parseInt(e.target.value);
    if (!colId) return;
    const cardEl = elements.columnsGrid.querySelector(`[data-id="${colId}"]`);
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: "smooth", block: "center" });
      cardEl.classList.add("highlight-flash");
      setTimeout(() => cardEl.classList.remove("highlight-flash"), 1500);
    }
    e.target.value = ""; // reset to placeholder
  });

  // Portable Pack
  elements.btnExportPortable.addEventListener("click", exportPortablePack);
  elements.btnImportPortableTrigger.addEventListener("click", () => elements.portableFileInput.click());
  elements.portableFileInput.addEventListener("change", importPortablePack);
  
  // Always Add Tags Buttons
  elements.btnAddAlwaysTag.addEventListener("click", addNewAlwaysTag);
  
  // Generate & Copy Buttons
  elements.btnGenerate.addEventListener("click", generatePrompt);
  elements.btnCopyText.addEventListener("click", copyPromptText);
  elements.btnCopyJson.addEventListener("click", copyPromptJson);
  
  // FAB quick copy
  elements.fabCopyBtn.addEventListener("click", () => {
    const text = elements.fabQuickCopy.dataset.fullText || "";
    if (!text) return;
    copyToClipboard(text);
    elements.fabCopyBtn.classList.add("copied");
    elements.fabCopyBtn.querySelector(".fab-label").textContent = "已複製!";
    setTimeout(() => {
      elements.fabCopyBtn.classList.remove("copied");
      elements.fabCopyBtn.querySelector(".fab-label").textContent = "複製";
    }, 1800);
  });

  elements.fabCloseBtn.addEventListener("click", () => hideFab());

  // Modal cancel/close
  elements.modalCancelBtn.addEventListener("click", () => closeModal(false));
  elements.modalCloseX.addEventListener("click", () => closeModal(false));
  elements.modalConfirmBtn.addEventListener("click", () => closeModal(true));
  elements.modalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") closeModal(true);
    if (e.key === "Escape") closeModal(false);
  });
}

// ---------------------------------
// State & Render Functions
// ---------------------------------

function renderAll() {
  state.columns.forEach(ensureColumnDefaults);
  renderCategoryTabs();
  renderColumnsGrid();
  renderAlwaysTagsList();
  renderPresetsDropdown();
  updateHeaderStates();
  updateColumnJumpSelect();
}

// Render the category tab bar above the columns grid
function renderCategoryTabs() {
  if (!elements.categoryTabsBar) return;
  elements.categoryTabsBar.innerHTML = "";

  const categories = getCategoryList();

  // If nobody has used categories yet, hide the bar entirely (no clutter)
  if (categories.length <= 1 && categories[0] === "" ) {
    elements.categoryTabsBar.style.display = "none";
  } else {
    elements.categoryTabsBar.style.display = "flex";
  }

  // Keep activeCategoryTab valid (category may have been renamed/removed)
  if (activeCategoryTab !== "__all__" && !categories.includes(activeCategoryTab)) {
    activeCategoryTab = "__all__";
  }

  const makeTab = (value, label, count) => {
    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = `category-tab ${activeCategoryTab === value ? "active" : ""}`;
    tab.innerHTML = `${label} <span class="category-tab-count">${count}</span>`;
    tab.addEventListener("click", () => {
      activeCategoryTab = value;
      selectedColumnIds.clear();
      renderCategoryTabs();
      renderColumnsGrid();
      updateSelectionBadge();
    });
    return tab;
  };

  elements.categoryTabsBar.appendChild(makeTab("__all__", "🗂️ 全部", state.columns.length));

  categories.forEach(cat => {
    const count = state.columns.filter(c => (c.category || "") === cat).length;
    elements.categoryTabsBar.appendChild(makeTab(cat, cat === "" ? UNCATEGORIZED_LABEL : cat, count));
  });

  // Keep the category datalist (used by each card's category input) in sync
  if (elements.categoryDatalist) {
    elements.categoryDatalist.innerHTML = "";
    categories.filter(c => c !== "").forEach(cat => {
      const opt = document.createElement("option");
      opt.value = cat;
      elements.categoryDatalist.appendChild(opt);
    });
  }
}

function updateHeaderStates() {
  elements.colCountInput.value = state.columnCount;
  elements.genCountInput.value = state.generateCount || 1;
  elements.toggleTitles.checked = state.settings.useTitles;
  elements.toggleComma.checked = state.settings.useComma;
  
  const activeCount = state.columns.filter(c => c.active).length;
  elements.activeColsBadge.textContent = `${activeCount} 個啟用`;

  // Update header toggle buttons active class
  const allActive = state.columns.length > 0 && state.columns.every(c => c.active);
  if (elements.btnToggleAllActive) {
    elements.btnToggleAllActive.classList.toggle("active", allActive);
    elements.btnToggleAllActive.title = allActive ? "一鍵停用所有欄位" : "一鍵啟用所有欄位";
  }

  const allNoRepeat = state.columns.length > 0 && state.columns.every(c => c.noRepeat);
  if (elements.btnToggleAllNoRepeat) {
    elements.btnToggleAllNoRepeat.classList.toggle("active", allNoRepeat);
    elements.btnToggleAllNoRepeat.title = allNoRepeat ? "一鍵關閉所有欄位不重複模式" : "一鍵開啟所有欄位不重複模式";
  }
}

// Render column cards dynamically
function renderColumnsGrid() {
  elements.columnsGrid.innerHTML = "";

  const visibleColumns = getVisibleSortedColumns();

  if (activeCategoryTab !== "__all__" && visibleColumns.length === 0) {
    const emptyMsg = document.createElement("div");
    emptyMsg.className = "category-empty-msg";
    emptyMsg.textContent = "此分類目前沒有欄位，可在下方欄位中設定分類將其移入。";
    elements.columnsGrid.appendChild(emptyMsg);
    updateSelectionBadge();
    return;
  }

  visibleColumns.forEach((col, index) => {
    const card = document.createElement("div");
    card.className = `col-card ${col.active ? 'active' : 'inactive'} ${selectedColumnIds.has(col.id) ? 'selected' : ''}`;
    card.setAttribute("data-id", col.id);
    
    // Drag and Drop event listeners on card (supports dragging a multi-selection as a group)
    card.addEventListener("dragstart", (e) => {
      const ids = (selectedColumnIds.has(col.id) && selectedColumnIds.size > 1)
        ? Array.from(selectedColumnIds)
        : [col.id];
      dragGroupIds = ids;
      dropTarget = null;
      e.dataTransfer.effectAllowed = "move";
      setTimeout(() => {
        ids.forEach(id => {
          const el = elements.columnsGrid.querySelector(`[data-id="${id}"]`);
          if (el) el.classList.add("dragging");
        });
      }, 0);
    });
    
    card.addEventListener("dragover", (e) => {
      e.preventDefault();
      if (!dragGroupIds || dragGroupIds.includes(col.id)) return;
      
      elements.columnsGrid.querySelectorAll(".drop-indicator-before, .drop-indicator-after")
        .forEach(el => el.classList.remove("drop-indicator-before", "drop-indicator-after"));
      
      const rect = card.getBoundingClientRect();
      const isBefore = (e.clientX - rect.left) < rect.width / 2;
      dropTarget = { colId: col.id, position: isBefore ? "before" : "after" };
      card.classList.add(isBefore ? "drop-indicator-before" : "drop-indicator-after");
    });
    
    card.addEventListener("drop", (e) => {
      e.preventDefault();
      finalizeGroupDrop();
    });
    
    card.addEventListener("dragend", () => {
      card.setAttribute("draggable", "false");
      elements.columnsGrid.querySelectorAll(".dragging")
        .forEach(el => el.classList.remove("dragging"));
      elements.columnsGrid.querySelectorAll(".drop-indicator-before, .drop-indicator-after")
        .forEach(el => el.classList.remove("drop-indicator-before", "drop-indicator-after"));
      dragGroupIds = null;
      dropTarget = null;
    });
    
    // Header section
    const header = document.createElement("div");
    header.className = "col-card-header";
    
    const titleContainer = document.createElement("div");
    titleContainer.className = "col-card-title-container";
    
    // Multi-select checkbox (for group drag reordering / bulk actions)
    const selectCheckbox = document.createElement("input");
    selectCheckbox.type = "checkbox";
    selectCheckbox.className = "col-select-checkbox";
    selectCheckbox.title = "勾選以多選欄位（可一起拖曳排序）";
    selectCheckbox.checked = selectedColumnIds.has(col.id);
    selectCheckbox.addEventListener("click", (e) => e.stopPropagation());
    selectCheckbox.addEventListener("change", (e) => {
      if (e.target.checked) {
        selectedColumnIds.add(col.id);
        card.classList.add("selected");
      } else {
        selectedColumnIds.delete(col.id);
        card.classList.remove("selected");
      }
      updateSelectionBadge();
    });
    
    // Drag Handle
    const dragHandle = document.createElement("div");
    dragHandle.className = "col-drag-handle";
    dragHandle.innerHTML = "⠿";
    dragHandle.title = "拖曳以調整順序";
    dragHandle.addEventListener("mousedown", () => {
      card.setAttribute("draggable", "true");
    });
    dragHandle.addEventListener("mouseup", () => {
      card.setAttribute("draggable", "false");
    });
    
    const idxBadge = document.createElement("div");
    idxBadge.className = "col-idx-badge";
    idxBadge.textContent = index + 1;
    idxBadge.title = `點擊輸入目標順位快速移動（目前第 ${index + 1} 位，依優先權排序）`;
    idxBadge.addEventListener("click", async () => {
      const total = visibleColumns.length;
      const currentPos = visibleColumns.indexOf(col) + 1;
      const newPosStr = await showCustomPrompt(
        "調整顯示順位",
        `目前順位：第 ${currentPos} 位「${col.title || '未命名'}」\n請輸入目標順位（1–${total}），數字越前面代表優先權越高：`,
        String(currentPos)
      );
      if (newPosStr === null || newPosStr.trim() === "") return;
      const newPos = parseInt(newPosStr);
      if (isNaN(newPos) || newPos < 1 || newPos > total) {
        showToast(`請輸入有效的順位（1–${total}）`, "error");
        return;
      }
      const reordered = visibleColumns.slice();
      const [moved] = reordered.splice(currentPos - 1, 1);
      reordered.splice(newPos - 1, 0, moved);
      reassignPriorityFromOrder(reordered);
      saveStateToStorage();
      renderAll();
      autoGenerate();
    });
    
    const titleInput = document.createElement("input");
    titleInput.className = "col-title-input";
    titleInput.type = "text";
    titleInput.value = col.title;
    titleInput.placeholder = `欄位 ${index + 1}`;
    titleInput.addEventListener("input", (e) => {
      col.title = e.target.value;
      saveStateToStorage();
      autoGenerate();
    });
    
    titleContainer.appendChild(selectCheckbox);
    titleContainer.appendChild(dragHandle);
    titleContainer.appendChild(idxBadge);
    titleContainer.appendChild(titleInput);
    
    // Pin button (📌)
    const pinBtn = document.createElement("button");
    pinBtn.className = `col-pin-btn ${col.lockedValue ? 'pinned' : ''}`;
    pinBtn.innerHTML = "📌";
    pinBtn.title = col.lockedValue ? "解鎖此欄位項目" : "鎖定目前生成的項目";
    pinBtn.addEventListener("click", () => {
      togglePin(col, pinBtn, card);
    });

    // Copy button (📋)
    const copyColBtn = document.createElement("button");
    copyColBtn.className = "col-card-action-btn copy";
    copyColBtn.innerHTML = "📋";
    copyColBtn.title = "複製此欄位（標題 + 內容）";
    copyColBtn.addEventListener("click", () => copyColumn(col));

    // Cut button (✂️)
    const cutColBtn = document.createElement("button");
    cutColBtn.className = "col-card-action-btn cut";
    cutColBtn.innerHTML = "✂️";
    cutColBtn.title = "剪下此欄位（複製內容後清空）";
    cutColBtn.addEventListener("click", () => cutColumn(col));

    // Active/Inactive toggle
    const toggleLabel = document.createElement("label");
    toggleLabel.className = "card-switch";
    
    const toggleInput = document.createElement("input");
    toggleInput.type = "checkbox";
    toggleInput.checked = col.active;
    toggleInput.addEventListener("change", (e) => {
      col.active = e.target.checked;
      card.className = `col-card ${col.active ? 'active' : 'inactive'}`;
      saveStateToStorage();
      updateHeaderStates();
      // Re-render always tags positions dropdown to account for changed index/active states
      renderAlwaysTagsList();
      autoGenerate();
    });
    
    const toggleSlider = document.createElement("span");
    toggleSlider.className = "card-slider";
    
    toggleLabel.appendChild(toggleInput);
    toggleLabel.appendChild(toggleSlider);
    
    // Remove button (❌)
    const removeBtn = document.createElement("button");
    removeBtn.className = "col-card-remove";
    removeBtn.innerHTML = "&times;";
    removeBtn.title = "刪除此欄位";
    removeBtn.addEventListener("click", () => {
      removeColumn(state.columns.indexOf(col));
    });
    
    // Controls row: pin + copy + cut + toggle  (remove btn stays absolute)
    const controlsRow = document.createElement("div");
    controlsRow.className = "col-card-controls";

    controlsRow.appendChild(pinBtn);
    controlsRow.appendChild(copyColBtn);
    controlsRow.appendChild(cutColBtn);
    controlsRow.appendChild(toggleLabel);

    header.appendChild(titleContainer);
    header.appendChild(controlsRow);
    header.appendChild(removeBtn);   // stays absolute-positioned

    // Category + Priority row
    const metaRow = document.createElement("div");
    metaRow.className = "col-card-meta-row";

    const categoryInput = document.createElement("input");
    categoryInput.className = "col-category-input";
    categoryInput.type = "text";
    categoryInput.value = col.category || "";
    categoryInput.placeholder = "🗂️ 分類（未填＝未分類）";
    categoryInput.setAttribute("list", "categoryDatalist");
    categoryInput.title = "輸入分類名稱以建立頁籤，同名分類會自動歸為同一頁籤";
    categoryInput.addEventListener("input", (e) => {
      col.category = e.target.value.trim();
      saveStateToStorage();
    });
    categoryInput.addEventListener("change", () => {
      renderAll();
      autoGenerate();
    });
    categoryInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") categoryInput.blur();
    });

    const priorityWrap = document.createElement("div");
    priorityWrap.className = "col-priority-wrap";
    priorityWrap.title = "優先權數字越大，在頁籤中排越前面";

    const priorityLabel = document.createElement("span");
    priorityLabel.className = "col-priority-label";
    priorityLabel.textContent = "⭐";

    const priorityInput = document.createElement("input");
    priorityInput.className = "col-priority-input";
    priorityInput.type = "number";
    priorityInput.value = col.priority || 0;
    priorityInput.addEventListener("input", (e) => {
      const val = parseInt(e.target.value);
      col.priority = isNaN(val) ? 0 : val;
      saveStateToStorage();
    });
    priorityInput.addEventListener("change", () => {
      renderAll();
      autoGenerate();
    });

    priorityWrap.appendChild(priorityLabel);
    priorityWrap.appendChild(priorityInput);

    metaRow.appendChild(categoryInput);
    metaRow.appendChild(priorityWrap);
    header.appendChild(metaRow);
    
    // Textarea section
    const textWrapper = document.createElement("div");
    textWrapper.className = "col-textarea-wrapper";
    
    const textarea = document.createElement("textarea");
    textarea.value = col.content;
    textarea.placeholder = "每行輸入一個標籤/詞彙...";
    
    // Footer section
    const footer = document.createElement("div");
    footer.className = "col-card-footer";
    
    const lockSelect = document.createElement("select");
    lockSelect.className = `col-lock-select ${col.lockedValue ? 'locked' : ''}`;
    
    const populateLockSelect = () => {
      lockSelect.innerHTML = '<option value="">🎲 隨機抽選</option>';
      const lines = col.content.split("\n").map(l => l.trim()).filter(l => l !== "");
      lines.forEach(line => {
        const opt = document.createElement("option");
        opt.value = line;
        opt.textContent = line.length > 25 ? line.slice(0, 25) + "..." : line;
        if (col.lockedValue === line) {
          opt.selected = true;
        }
        lockSelect.appendChild(opt);
      });
    };
    
    populateLockSelect();
    
    lockSelect.addEventListener("change", (e) => {
      const val = e.target.value;
      const headerPinBtn = card.querySelector(".col-pin-btn");
      if (val === "") {
        col.lockedValue = null;
        lockSelect.classList.remove("locked");
        if (headerPinBtn) {
          headerPinBtn.classList.remove("pinned");
          headerPinBtn.title = "鎖定目前生成的項目";
        }
      } else {
        col.lockedValue = val;
        lockSelect.classList.add("locked");
        if (headerPinBtn) {
          headerPinBtn.classList.add("pinned");
          headerPinBtn.title = "解鎖此欄位項目";
        }
        showToast(`📌 已鎖定欄位「${col.title || '未命名'}」的值為: ${val}`, "success");
      }
      saveStateToStorage();
      autoGenerate();
    });
    
    textarea.addEventListener("input", (e) => {
      col.content = e.target.value;
      saveStateToStorage();
      updateLinesCounter(card, col.content);
      populateLockSelect();
      
      // Auto-unlock if locked value is deleted
      const lines = col.content.split("\n").map(l => l.trim()).filter(l => l !== "");
      if (col.lockedValue && !lines.includes(col.lockedValue)) {
        col.lockedValue = null;
        lockSelect.value = "";
        lockSelect.classList.remove("locked");
        const headerPinBtn = card.querySelector(".col-pin-btn");
        if (headerPinBtn) {
          headerPinBtn.classList.remove("pinned");
          headerPinBtn.title = "鎖定目前生成的項目";
        }
        saveStateToStorage();
      }
    });
    
    textWrapper.appendChild(textarea);
    
    const counter = document.createElement("span");
    counter.className = "lines-counter";
    
    footer.appendChild(lockSelect);

    // No-repeat mode toggle
    const noRepeatBtn = document.createElement("button");
    noRepeatBtn.className = `col-no-repeat-btn ${col.noRepeat ? 'active' : ''}`;
    noRepeatBtn.textContent = "♻️";
    noRepeatBtn.title = col.noRepeat
      ? `不重複模式：開啟（已用 ${(col.usedValues || []).length} 個）點擊關閉`
      : "不重複模式：關閉（點擊開啟）";
    noRepeatBtn.addEventListener("click", () => {
      col.noRepeat = !col.noRepeat;
      if (!col.noRepeat) col.usedValues = [];
      noRepeatBtn.className = `col-no-repeat-btn ${col.noRepeat ? 'active' : ''}`;
      noRepeatBtn.title = col.noRepeat
        ? `不重複模式：開啟（已用 ${(col.usedValues || []).length} 個）點擊關閉`
        : "不重複模式：關閉（點擊開啟）";
      saveStateToStorage();
      showToast(
        col.noRepeat
          ? `♻️ 「${col.title || '此欄位'}」 已開啟不重複模式`
          : `不重複模式已關閉，已清除已用記錄`,
        "info"
      );
    });
    footer.appendChild(noRepeatBtn);

    footer.appendChild(counter);

    // Paste-after button (shown by CSS body.has-clipboard)
    const pasteBtn = document.createElement("button");
    pasteBtn.className = "btn-paste-col";
    pasteBtn.textContent = "📌 貼入";
    pasteBtn.title = `在第 ${index + 1} 欄後方貼入複製的欄位`;
    pasteBtn.addEventListener("click", () => {
      pasteColumnAfter(state.columns.indexOf(col));
    });
    footer.appendChild(pasteBtn);

    // Insert-after button
    const insertBtn = document.createElement("button");
    insertBtn.className = "btn-insert-col";
    insertBtn.textContent = "＋ 插入";
    insertBtn.title = `在第 ${index + 1} 欄後方插入新欄位`;
    insertBtn.addEventListener("click", () => {
      insertColumnAfter(state.columns.indexOf(col));
    });
    footer.appendChild(insertBtn);

    card.appendChild(header);
    card.appendChild(textWrapper);
    card.appendChild(footer);

    elements.columnsGrid.appendChild(card);
    updateLinesCounter(card, col.content);
  });

  updateSelectionBadge();
}

function updateLinesCounter(cardElement, content) {
  const counterElement = cardElement.querySelector(".lines-counter");
  if (!counterElement) return;
  const lines = content.split("\n").map(l => l.trim()).filter(l => l !== "");
  counterElement.textContent = `${lines.length} 行`;
}

function updateIndexBadges() {
  const currentCards = elements.columnsGrid.querySelectorAll(".col-card");
  currentCards.forEach((cardEl, idx) => {
    const badge = cardEl.querySelector(".col-idx-badge");
    if (badge) {
      badge.textContent = idx + 1;
    }
    const titleInput = cardEl.querySelector(".col-title-input");
    if (titleInput && (!titleInput.value || titleInput.value.startsWith("欄位 "))) {
      titleInput.placeholder = `欄位 ${idx + 1}`;
    }
  });
}

function togglePin(col, pinBtn, cardElement) {
  const select = cardElement.querySelector(".col-lock-select");
  if (col.lockedValue) {
    // Unlock
    col.lockedValue = null;
    pinBtn.classList.remove("pinned");
    pinBtn.title = "鎖定目前生成的項目";
    if (select) {
      select.value = "";
      select.classList.remove("locked");
    }
  } else {
    // Lock
    const lines = col.content.split("\n").map(l => l.trim()).filter(l => l !== "");
    if (lines.length === 0) {
      showToast("此欄位沒有內容，無法鎖定", "error");
      return;
    }
    
    // Determine value to lock
    let valueToLock = col.lastSelectedValue;
    if (!valueToLock || !lines.includes(valueToLock)) {
      valueToLock = lines[0];
    }
    
    col.lockedValue = valueToLock;
    pinBtn.classList.add("pinned");
    pinBtn.title = "解鎖此欄位項目";
    if (select) {
      select.value = valueToLock;
      select.classList.add("locked");
    }
    showToast(`📌 已鎖定欄位「${col.title || '未命名'}」的值為: ${valueToLock}`, "success");
  }
  saveStateToStorage();
  autoGenerate();
}

// Render Always Add Tags dynamically
function renderAlwaysTagsList() {
  elements.alwaysTagsGrid.innerHTML = "";
  
  if (state.alwaysTags.length === 0) {
    const emptyMsg = document.createElement("div");
    emptyMsg.style.padding = "20px";
    emptyMsg.style.textAlign = "center";
    emptyMsg.style.color = "var(--text-muted)";
    emptyMsg.textContent = "尚無固定附加標籤，點選上方按鈕新增。";
    elements.alwaysTagsGrid.appendChild(emptyMsg);
    return;
  }
  
  state.alwaysTags.forEach((tag, tagIndex) => {
    const row = document.createElement("div");
    row.className = `always-row ${tag.enabled ? '' : 'inactive'}`;
    row.setAttribute("data-id", tag.id);

    // ── Drag Handle ──
    const dragHandle = document.createElement("div");
    dragHandle.className = "always-drag-handle";
    dragHandle.innerHTML = "⠿";
    dragHandle.title = "拖曳調整順序";

    // Drag events on the ROW (enabled only via handle)
    row.addEventListener("dragstart", (e) => {
      alwaysDraggedRow = row;
      e.dataTransfer.effectAllowed = "move";
      setTimeout(() => row.classList.add("dragging-row"), 0);
    });

    row.addEventListener("dragover", (e) => {
      e.preventDefault();
      if (!alwaysDraggedRow || alwaysDraggedRow === row) return;
      const rect = row.getBoundingClientRect();
      const relY = e.clientY - rect.top;
      const parent = row.parentNode;
      const rows = Array.from(parent.children);
      const draggedIdx = rows.indexOf(alwaysDraggedRow);
      const targetIdx  = rows.indexOf(row);
      if (draggedIdx < targetIdx) {
        if (relY > rect.height / 2) parent.insertBefore(alwaysDraggedRow, row.nextSibling);
      } else {
        if (relY < rect.height / 2) parent.insertBefore(alwaysDraggedRow, row);
      }
    });

    row.addEventListener("dragend", () => {
      row.classList.remove("dragging-row");
      row.setAttribute("draggable", "false");
      alwaysDraggedRow = null;
      // Sync state.alwaysTags from DOM order
      const newTags = [];
      elements.alwaysTagsGrid.querySelectorAll(".always-row").forEach((rowEl) => {
        const tagId = parseInt(rowEl.getAttribute("data-id"));
        const tagObj = state.alwaysTags.find(t => t.id === tagId);
        if (tagObj) newTags.push(tagObj);
      });
      state.alwaysTags = newTags;
      saveStateToStorage();
      renderAlwaysTagsList();
      autoGenerate();
    });

    dragHandle.addEventListener("mousedown", () => row.setAttribute("draggable", "true"));
    dragHandle.addEventListener("mouseup",   () => row.setAttribute("draggable", "false"));

    // Position selection
    const posContainer = document.createElement("div");
    posContainer.className = "always-pos-container";
    
    const select = document.createElement("select");
    select.className = "always-pos-dropdown";
    
    // Default positions
    const posOptions = [
      { value: "beginning", label: "開頭" },
      { value: "middle", label: "中間 (啟用欄位半數處)" },
      { value: "end", label: "結尾" }
    ];
    
    // Add positional inserts after specific columns
    state.columns.forEach((col, cIdx) => {
      posOptions.push({
        value: `after_col_${cIdx + 1}`,
        label: `插入在第 ${cIdx + 1} 欄之${col.title ? `後 (${col.title})` : '後'}`
      });
    });
    
    posOptions.forEach(opt => {
      const option = document.createElement("option");
      option.value = opt.value;
      option.textContent = opt.label;
      if (tag.position === opt.value) {
        option.selected = true;
      }
      select.appendChild(option);
    });
    
    select.addEventListener("change", (e) => {
      tag.position = e.target.value;
      saveStateToStorage();
      autoGenerate();
    });
    
    posContainer.appendChild(select);
    
    // Textarea
    const input = document.createElement("textarea");
    input.className = "always-tag-textarea";
    input.value = tag.text;
    input.rows = 1;
    input.placeholder = "輸入標籤（可多行，逗號或換行分隔）...";
    input.addEventListener("input", (e) => {
      tag.text = e.target.value;
      saveStateToStorage();
      autoGenerate();
    });
    
    // Switch container
    const switchContainer = document.createElement("label");
    switchContainer.className = "card-switch";
    
    const switchInput = document.createElement("input");
    switchInput.type = "checkbox";
    switchInput.checked = tag.enabled;
    switchInput.addEventListener("change", (e) => {
      tag.enabled = e.target.checked;
      row.className = `always-row ${tag.enabled ? '' : 'inactive'}`;
      saveStateToStorage();
      autoGenerate();
    });
    
    const switchSlider = document.createElement("span");
    switchSlider.className = "card-slider";
    
    switchContainer.appendChild(switchInput);
    switchContainer.appendChild(switchSlider);
    
    // Actions wrapper
    const actions = document.createElement("div");
    actions.className = "always-row-actions";
    
    const removeBtn = document.createElement("button");
    removeBtn.className = "btn-remove-always";
    removeBtn.innerHTML = "&times;";
    removeBtn.title = "移除此標籤組";
    removeBtn.addEventListener("click", () => {
      removeAlwaysTag(tagIndex);
    });
    
    actions.appendChild(switchContainer);
    actions.appendChild(removeBtn);
    
    row.appendChild(dragHandle);
    row.appendChild(posContainer);
    row.appendChild(input);
    row.appendChild(actions);
    
    elements.alwaysTagsGrid.appendChild(row);
  });
}

// ---------------------------------
// Columns Controls Logic
// ---------------------------------

function setColCount(count) {
  let target = Math.max(2, Math.min(500, count));
  state.columnCount = target;
  
  // Adjust columns array size
  if (state.columns.length < target) {
    // Append new empty columns
    while (state.columns.length < target) {
      const newIdx = state.columns.length;
      state.columns.push({
        id: Date.now() + newIdx * 10,
        title: "",
        content: "",
        active: true,
        lockedValue: null,
        category: activeCategoryTab === "__all__" ? "" : activeCategoryTab,
        priority: 0
      });
    }
  } else if (state.columns.length > target) {
    // Keep them in array, just limit count for presentation?
    // In our design, columns array size strictly matches columnCount to avoid confusion
    state.columns.slice(target).forEach(col => {
      // Clean up orphaned auto-saves
      localStorage.removeItem(`${STORAGE_PREFIX}col_card_${col.id}`);
    });
    state.columns = state.columns.slice(0, target);
  }
  
  saveStateToStorage();
  renderAll();
  autoGenerate();
}

function adjustColCount(amount) {
  setColCount(state.columnCount + amount);
}

// ---------------------------------
// Toggle All Active & No-Repeat
// ---------------------------------

function toggleAllActive() {
  if (state.columns.length === 0) return;
  const hasInactive = state.columns.some(c => !c.active);
  const targetActive = hasInactive;

  state.columns.forEach(c => {
    c.active = targetActive;
  });

  saveStateToStorage();
  renderAll();
  autoGenerate();

  showToast(
    targetActive ? "⚡ 已啟用所有欄位" : "⚡ 已停用所有欄位",
    targetActive ? "success" : "info"
  );
}

function toggleAllNoRepeat() {
  if (state.columns.length === 0) return;
  const hasDisabledNoRepeat = state.columns.some(c => !c.noRepeat);
  const targetNoRepeat = hasDisabledNoRepeat;

  state.columns.forEach(c => {
    c.noRepeat = targetNoRepeat;
    if (!targetNoRepeat) {
      c.usedValues = [];
    }
  });

  saveStateToStorage();
  renderAll();
  autoGenerate();

  showToast(
    targetNoRepeat ? "♻️ 已開啟所有欄位的不重複模式" : "♻️ 已關閉所有欄位的不重複模式",
    targetNoRepeat ? "success" : "info"
  );
}

// ---------------------------------
// Clipboard (Column Copy/Cut/Paste)
// ---------------------------------

const CLIPBOARD_KEY = "aura_pg_clipboard";

function getClipboard() {
  try {
    const data = localStorage.getItem(CLIPBOARD_KEY);
    return data ? JSON.parse(data) : null;
  } catch (e) { return null; }
}

function setClipboard(data) {
  localStorage.setItem(CLIPBOARD_KEY, JSON.stringify(data));
  document.body.classList.add("has-clipboard");
}

function clearClipboard() {
  localStorage.removeItem(CLIPBOARD_KEY);
  document.body.classList.remove("has-clipboard");
}

function copyColumn(col) {
  setClipboard({ title: col.title, content: col.content, category: col.category || "", priority: col.priority || 0 });
  showToast(`📋 已複製欄位「${col.title || '（無標題）'}」`, "success");
}

function cutColumn(col) {
  setClipboard({ title: col.title, content: col.content, category: col.category || "", priority: col.priority || 0 });
  col.title   = "";
  col.content = "";
  col.lockedValue = null;
  saveStateToStorage();
  renderAll();
  showToast(`✂️ 已剪下欄位（內容已清空，可貼入其他欄位後）`, "success");
}

function pasteColumnAfter(index) {
  const clip = getClipboard();
  if (!clip) {
    showToast("剪貼簿是空的，請先複製或剪下一個欄位", "error");
    return;
  }
  if (state.columnCount >= 500) {
    showToast("已達最高欄位上限 500 個", "error");
    return;
  }
  const newCol = {
    id: Date.now(),
    title: clip.title,
    content: clip.content,
    active: true,
    lockedValue: null,
    noRepeat: false,
    usedValues: [],
    category: clip.category || "",
    priority: clip.priority || 0
  };
  state.columns.splice(index + 1, 0, newCol);
  state.columnCount = state.columns.length;
  saveStateToStorage();
  renderAll();
  showToast(`📌 已在第 ${index + 1} 欄後貼入「${clip.title || '（無標題）'}」`, "success");
  autoGenerate();
}

// ---------------------------------
// Reset to Default (5 blank columns)
// ---------------------------------

async function resetToDefault() {
  const confirmReset = await showCustomConfirm(
    "重設為預設",
    "將清除所有欄位並重設為 5 個空白欄位，此操作無法復原。確定要繼續嗎？",
    true
  );
  if (!confirmReset) return;

  state.columns = [];
  for (let i = 0; i < 5; i++) {
    state.columns.push({
      id: Date.now() + i * 10,
      title: "",
      content: "",
      active: true,
      lockedValue: null,
      noRepeat: false,
      usedValues: [],
      category: "",
      priority: 0
    });
  }
  activeCategoryTab = "__all__";
  state.columnCount = 5;
  saveStateToStorage();
  renderAll();
  showToast("⬜ 已重設為 5 個空白欄位", "success");
  autoGenerate();
}

// ---------------------------------
// Duplicate Selected Preset
// ---------------------------------

async function duplicateSelectedPreset() {
  const name = elements.presetSelect.value;
  if (!name) {
    showToast("請先選取要複製的設定檔", "error");
    return;
  }
  const presets = getPresetsFromStorage();
  const preset  = presets[name];
  if (!preset) {
    showToast("找不到此設定檔", "error");
    return;
  }

  const defaultNewName = `${name} (複製)`;
  const newName = await showCustomPrompt(
    "設定檔複製",
    `複製「${name}」，請輸入新的設定檔名稱：`,
    defaultNewName
  );
  if (!newName || newName.trim() === "") return;
  const trimmed = newName.trim();

  if (presets[trimmed]) {
    const overwrite = await showCustomConfirm(
      "名稱已存在",
      `設定檔「${trimmed}」已存在，確定要覆蓋嗎？`,
      true
    );
    if (!overwrite) return;
  }

  presets[trimmed] = JSON.parse(JSON.stringify(preset)); // deep clone
  savePresetsToStorage(presets);
  renderPresetsDropdown();
  elements.presetSelect.value = trimmed;
  showToast(`📑 設定檔「${name}」已複製為「${trimmed}」`, "success");
}

// ---------------------------------
// Column Jump Select
// ---------------------------------

function updateColumnJumpSelect() {
  if (!elements.colJumpSelect) return;
  elements.colJumpSelect.innerHTML = '<option value="">\ud83d\udd0d \u8df3\u8f49\u81f3\u6b04\u4f4d...</option>';
  state.columns.forEach((col, idx) => {
    const opt = document.createElement("option");
    opt.value = col.id;
    const label = col.title
      ? `\u7b2c ${idx + 1} \u6b04 \u2014 ${col.title}`
      : `\u7b2c ${idx + 1} \u6b04`;
    opt.textContent = label;
    elements.colJumpSelect.appendChild(opt);
  });
}

function setGenCount(count) {
  let target = Math.max(1, Math.min(99, count));
  state.generateCount = target;
  saveStateToStorage();
  updateHeaderStates();
  autoGenerate();
}

function adjustGenCount(amount) {
  setGenCount((state.generateCount || 1) + amount);
}

// ---------------------------------
// Insert Column After
// ---------------------------------

function insertColumnAfter(index) {
  if (state.columnCount >= 500) {
    showToast("已達最高欄位上限 500 個", "error");
    return;
  }
  const newCol = {
    id: Date.now(),
    title: "",
    content: "",
    active: true,
    lockedValue: null,
    category: activeCategoryTab === "__all__" ? "" : activeCategoryTab,
    priority: 0
  };
  state.columns.splice(index + 1, 0, newCol);
  state.columnCount = state.columns.length;
  saveStateToStorage();
  renderAll();
  showToast(`已在第 ${index + 1} 欄後方插入新欄位`, "success");
  autoGenerate();
}

// ---------------------------------
// Move Column to Target Position
// ---------------------------------

function moveColumnToPosition(fromIndex, toIndex) {
  const total = state.columns.length;
  toIndex = Math.max(0, Math.min(total - 1, toIndex));
  if (fromIndex === toIndex) return;
  const [col] = state.columns.splice(fromIndex, 1);
  state.columns.splice(toIndex, 0, col);
  saveStateToStorage();
  renderAll();
  autoGenerate();
  showToast(`欄位已移動至第 ${toIndex + 1} 位`, "success");
}

// ---------------------------------
// Export Single Preset
// ---------------------------------

function exportSinglePreset() {
  const name = elements.presetSelect.value;
  if (!name) {
    showToast("請先從下拉選單選取要匯出的設定檔", "error");
    return;
  }
  const presets = getPresetsFromStorage();
  const preset  = presets[name];
  if (!preset) {
    showToast("找不到此設定檔，請重新選取", "error");
    return;
  }

  const fileContent = JSON.stringify(preset, null, 2);
  const blob = new Blob([fileContent], { type: "application/json" });
  const url  = URL.createObjectURL(blob);

  const safeFilename = name.replace(/[^a-zA-Z0-9\u4e00-\u9fff_\-]/g, "_");
  const a = document.createElement("a");
  a.href     = url;
  a.download = `preset_${safeFilename}.json`;
  document.body.appendChild(a);
  a.click();

  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);

  showToast(`📤 設定檔「${name}」已單獨匯出`, "success");
}

function addNewColumn() {
  if (state.columnCount >= 500) {
    showToast("已達最高欄位上限 500 個", "error");
    return;
  }
  setColCount(state.columnCount + 1);
  showToast("已新增一個新欄位", "success");
}

async function removeColumn(index) {
  if (state.columnCount <= 2) {
    showToast("欄位數最少必須有 2 個", "error");
    return;
  }
  
  const col = state.columns[index];
  const hasContent = col.title.trim() !== "" || col.content.trim() !== "";
  
  if (hasContent) {
    const confirmDelete = await showCustomConfirm(
      "刪除欄位確認", 
      `您確定要刪除第 ${index + 1} 欄「${col.title || '未命名'}」嗎？此操作將會清除該欄內容且無法復原。`
    );
    if (!confirmDelete) return;
  }
  
  // Remove
  state.columns.splice(index, 1);
  state.columnCount = state.columns.length;
  selectedColumnIds.delete(col.id);
  
  saveStateToStorage();
  renderAll();
  showToast(`第 ${index + 1} 欄已刪除`, "success");
  autoGenerate();
}

async function emptyAllContents() {
  const confirmClear = await showCustomConfirm(
    "清空欄位內容",
    "確定要清空所有欄位中的文字內容嗎？此操作無法還原。",
    true
  );
  if (!confirmClear) return;
  
  state.columns.forEach(col => {
    col.content = "";
  });
  
  saveStateToStorage();
  renderAll();
  showToast("已清空所有欄位內容", "success");
  autoGenerate();
}

async function clearAllTitles() {
  const confirmClear = await showCustomConfirm(
    "清空欄位標題",
    "確定要清空所有欄位標題嗎？",
    true
  );
  if (!confirmClear) return;
  
  state.columns.forEach(col => {
    col.title = "";
  });
  
  saveStateToStorage();
  renderAll();
  showToast("已清空所有欄位標題", "success");
  autoGenerate();
}

// ---------------------------------
// Always Add Tags Logic
// ---------------------------------

function addNewAlwaysTag() {
  state.alwaysTags.push({
    id: Date.now(),
    text: "",
    enabled: true,
    position: "end"
  });
  saveStateToStorage();
  renderAlwaysTagsList();
  showToast("已新增固定標籤組", "success");
}

function removeAlwaysTag(index) {
  state.alwaysTags.splice(index, 1);
  saveStateToStorage();
  renderAlwaysTagsList();
  showToast("已移除固定標籤組", "info");
  autoGenerate();
}

// ---------------------------------
// Prefill Default Data
// ---------------------------------

async function prefillDefault() {
  const confirmPrefill = await showCustomConfirm(
    "載入預設資料",
    "這將會覆寫當前網頁的所有內容，並填入預設的 12 欄位圖像提示詞標籤，確定要載入嗎？"
  );
  if (!confirmPrefill) return;
  
  state.columnCount = 12;
  state.generateCount = 1;
  state.columns = [];
  
  for (let i = 1; i <= 12; i++) {
    state.columns.push({
      id: Date.now() + i * 10,
      title: DEFAULT_TITLES[i - 1],
      content: DEFAULT_CONTENTS[i] || "",
      active: true,
      category: "",
      priority: 0
    });
  }
  activeCategoryTab = "__all__";
  
  // Fill default always tags
  state.alwaysTags = [
    {
      id: Date.now() + 100,
      text: DEFAULT_ALWAYS_TAGS.join("\n"),
      enabled: true,
      position: "end"
    }
  ];
  
  state.settings.useTitles = true;
  state.settings.useComma = true;
  
  saveStateToStorage();
  renderAll();
  showToast("已載入預設 12 欄位資料", "success");
  generatePrompt();
}

// ---------------------------------
// Prompt Generation Logic
// ---------------------------------

let autoGenTimeout = null;
function autoGenerate() {
  // Use a small debounce to avoid spamming generation during fast inputs
  clearTimeout(autoGenTimeout);
  autoGenTimeout = setTimeout(() => {
    // Only auto-generate if the output box doesn't have default placeholder
    const firstBox = elements.outputsGrid.querySelector(".output-box");
    const currentOut = firstBox ? firstBox.textContent.trim() : "";
    if (currentOut && !currentOut.includes("輸入內容 → 點選")) {
      generatePrompt(false); // Generate silently without highlight animation
    }
  }, 100);
}

function generatePrompt(shouldAnimate = true) {
  const genCount = state.generateCount || 1;
  const generatedPrompts = [];
  const selectionsList = [];

  for (let i = 0; i < genCount; i++) {
    let activeSegments = []; // array of { colIndex, originalIdx, label, pickText }
    
    // 1. Gather choices from active columns
    state.columns.forEach((col, idx) => {
      if (!col.active) return;
      
      const text = col.content.trim();
      if (text === "") return;
      
      const lines = text.split("\n")
        .map(line => line.trim())
        .filter(line => line !== "");
        
      if (lines.length === 0) return;
      
      // Pick locked or random line (with noRepeat support)
      let selectedLine = "";
      if (col.lockedValue && lines.includes(col.lockedValue)) {
        selectedLine = col.lockedValue;
      } else if (col.noRepeat) {
        const usedSet = new Set(col.usedValues || []);
        let available = lines.filter(l => !usedSet.has(l));
        if (available.length === 0) {
          // All used — reset and cycle
          col.usedValues = [];
          available = lines;
          if (i === 0) {
            showToast(`♻️ 「${col.title || '欄位'}」 已全部抽完，重新從頭循環`, "info");
          }
        }
        selectedLine = available[Math.floor(Math.random() * available.length)];
        if (i === 0) {
          if (!col.usedValues) col.usedValues = [];
          col.usedValues.push(selectedLine);
          saveStateToStorage(); // persist used list
        }
      } else {
        selectedLine = lines[Math.floor(Math.random() * lines.length)];
      }
      
      // Store last selected value for quick pinning
      if (i === 0) {
        col.lastSelectedValue = selectedLine;
      }
      
      const labelText = col.title.trim() || `欄位${idx + 1}`;
      
      activeSegments.push({
        colIndex: idx, // 0-based render index
        originalIdx: idx + 1, // 1-based original index
        label: labelText,
        pickText: selectedLine
      });
    });
    
    // Capture selections for this generation
    const selections = {};
    activeSegments.forEach(seg => {
      selections[seg.originalIdx] = seg.pickText;
    });
    selectionsList.push(selections);
    
    // If no columns are enabled or filled, and no always-tags, break early or handle it
    if (activeSegments.length === 0 && state.alwaysTags.filter(t => t.enabled && t.text.trim() !== "").length === 0) {
      if (i === 0) {
        elements.outputsGrid.innerHTML = `
          <div class="output-card">
            <div class="output-box-container">
              <div class="output-box">(沒有填寫或啟用的欄位)</div>
            </div>
          </div>
        `;
        return;
      }
    }
    
    // Helper to format segments
    const formatSegment = (seg) => {
      if (state.settings.useTitles) {
        return `${seg.label}: ${seg.pickText}`;
      }
      return seg.pickText;
    };
    
    // Form initial column prompt list
    let finalPromptList = activeSegments.map(seg => ({
      type: "column",
      originalIdx: seg.originalIdx,
      text: formatSegment(seg)
    }));
    
    // 2. Process Always Add Tags
    // Gather active tags
    const activeAlwaysTags = state.alwaysTags.filter(t => t.enabled && t.text.trim() !== "");
    
    // Sort them so that 'beginning' goes first, then custom post-column ones, then 'middle', then 'end'
    let beginningTags = [];
    let middleTags = [];
    let endTags = [];
    let relativeTags = {}; // originalIdx -> Array of tags
    
    activeAlwaysTags.forEach(tag => {
      // Process text: split by newline or comma
      const tagItems = tag.text.split(/[\n,]/)
        .map(item => item.trim())
        .filter(item => item !== "");
        
      if (tagItems.length === 0) return;
      
      const formattedTag = tagItems.join(state.settings.useComma ? ", " : "\n");
      
      if (tag.position === "beginning") {
        beginningTags.push(formattedTag);
      } else if (tag.position === "end") {
        endTags.push(formattedTag);
      } else if (tag.position === "middle") {
        middleTags.push(formattedTag);
      } else if (tag.position.startsWith("after_col_")) {
        const colNum = parseInt(tag.position.replace("after_col_", ""));
        if (!relativeTags[colNum]) {
          relativeTags[colNum] = [];
        }
        relativeTags[colNum].push(formattedTag);
      }
    });
    
    // Re-assemble the prompt array
    let outputList = [];
    
    // A. Prepend Beginning tags
    if (beginningTags.length > 0) {
      outputList.push(beginningTags.join(state.settings.useComma ? ", " : "\n"));
    }
    
    // B. Process columns and relative/middle inserts
    const activeColCount = finalPromptList.length;
    const middlePoint = Math.floor(activeColCount / 2);
    
    finalPromptList.forEach((colItem, idx) => {
      // Insert column item
      outputList.push(colItem.text);
      
      // Check if relative tags go after this original column index
      if (relativeTags[colItem.originalIdx]) {
        relativeTags[colItem.originalIdx].forEach(tagText => {
          outputList.push(tagText);
        });
        // Delete from relativeTags so we know it's placed
        delete relativeTags[colItem.originalIdx];
      }
      
      // Check if middle tags insert here
      if (idx + 1 === middlePoint && middleTags.length > 0) {
        outputList.push(middleTags.join(state.settings.useComma ? ", " : "\n"));
      }
    });
    
    // C. Handle leftover relative tags
    Object.keys(relativeTags).forEach(colNum => {
      relativeTags[colNum].forEach(tagText => {
        outputList.push(tagText);
      });
    });
    
    // D. If there are middle tags but no active columns, insert middle tags
    if (activeColCount === 0 && middleTags.length > 0) {
      outputList.push(middleTags.join(state.settings.useComma ? ", " : "\n"));
    }
    
    // E. Append End tags
    if (endTags.length > 0) {
      outputList.push(endTags.join(state.settings.useComma ? ", " : "\n"));
    }
    
    // Combine all items with selected separator
    const separator = state.settings.useComma ? ", " : "\n";
    const finalPromptText = outputList.join(separator);
    generatedPrompts.push(finalPromptText);
  }

  // Capture current selections for JSON export
  window.lastSelectionsList = selectionsList;
  window.lastSelections = selectionsList[0];

  elements.outputsGrid.innerHTML = "";

  generatedPrompts.forEach((promptText, index) => {
    const card = document.createElement("div");
    card.className = "output-card";

    // Header with Title and Copy button
    const cardHeader = document.createElement("div");
    cardHeader.className = "output-card-header";

    const titleSpan = document.createElement("span");
    titleSpan.className = "output-card-title";
    titleSpan.textContent = genCount > 1 ? `第 ${index + 1} 組提示詞` : "生成的提示詞結果";

    const copyBtn = document.createElement("button");
    copyBtn.className = "btn-copy-single";
    copyBtn.innerHTML = "📋 複製此組";
    copyBtn.addEventListener("click", () => {
      copyToClipboard(promptText);
      showToast(`📋 已複製第 ${index + 1} 組提示詞！`, "success");
    });

    cardHeader.appendChild(titleSpan);
    cardHeader.appendChild(copyBtn);

    // Box container & box
    const boxContainer = document.createElement("div");
    boxContainer.className = "output-box-container";

    const box = document.createElement("div");
    box.className = "output-box";
    box.textContent = promptText;

    if (shouldAnimate) {
      box.classList.add("output-glow-animation");
    }

    boxContainer.appendChild(box);
    card.appendChild(cardHeader);
    card.appendChild(boxContainer);
    
    elements.outputsGrid.appendChild(card);
  });
  
  // Show toast if needed
  if (shouldAnimate) {
    const toastMsg = genCount > 1 ? `🔮 已隨機生成 ${genCount} 組新提示詞` : "🔮 已隨機生成新提示詞";
    showToast(toastMsg, "info");
  }

  // Update floating quick-copy FAB
  if (generatedPrompts.length > 0) {
    showFab(generatedPrompts[0]);
  }
}

// ---------------------------------
// Floating Quick-Copy FAB
// ---------------------------------

let fabHideTimer = null;

function showFab(promptText) {
  const fab = elements.fabQuickCopy;
  if (!fab) return;

  // Store the full text for copy
  fab.dataset.fullText = promptText;

  // Set preview (first ~50 chars)
  const preview = promptText.replace(/\n/g, ", ").slice(0, 55);
  elements.fabPreviewText.textContent = preview + (promptText.length > 55 ? "…" : "");

  // Reset copy button label
  elements.fabCopyBtn.classList.remove("copied");
  elements.fabCopyBtn.querySelector(".fab-label").textContent = "複製";

  // Show with animation
  fab.classList.remove("hiding");
  fab.style.display = "flex";

  // Clear any pending hide timer
  if (fabHideTimer) clearTimeout(fabHideTimer);
}

function hideFab() {
  const fab = elements.fabQuickCopy;
  if (!fab || fab.style.display === "none") return;
  fab.classList.add("hiding");
  fabHideTimer = setTimeout(() => {
    fab.style.display = "none";
    fab.classList.remove("hiding");
  }, 260);
}

// ---------------------------------
// Clipboard Logic
// ---------------------------------

function copyPromptText() {
  const boxes = Array.from(elements.outputsGrid.querySelectorAll(".output-box"));
  const texts = boxes.map(box => box.textContent.trim()).filter(t => t !== "");
  
  if (texts.length === 0 || (texts.length === 1 && texts[0].includes("輸入內容 → 點選"))) {
    showToast("尚未生成任何提示詞，請先生成", "error");
    return;
  }
  
  const textToCopy = texts.join("\n\n");
  copyToClipboard(textToCopy);
  
  const toastMsg = texts.length > 1 ? "📋 已複製全部提示詞！" : "📋 提示詞複製成功！";
  showToast(toastMsg, "success");
}

function copyPromptJson() {
  const selectionsList = window.lastSelectionsList || [];
  
  if (selectionsList.length === 0) {
    showToast("尚未生成任何提示詞，請先生成", "error");
    return;
  }
  
  const buildJsonObj = (selections) => {
    const jsonObj = {
      "style": {
        "primary": selections[4] || "",
        "lighting": selections[11] || "",
        "mood": selections[5] || "",
        "colors": selections[6] || ""
      },
      "technical": {
        "camera": selections[9] || ""
      },
      "materials": {
        "texture": selections[8] || ""
      },
      "environment": {
        "location": selections[3] || "",
        "time_of_day": selections[10] || ""
      },
      "composition": {
        "framing": selections[7] || "",
        "focus_subject": (selections[1] || "") + (selections[1] && selections[2] ? " " : "") + (selections[2] || "")
      },
      "quality": {
        "resolution": selections[12] || ""
      }
    };
    
    const customFields = {};
    state.columns.forEach((col, idx) => {
      const origIdx = idx + 1;
      if (origIdx > 12 && selections[origIdx]) {
        const name = col.title.trim() || `column_${origIdx}`;
        customFields[name] = selections[origIdx];
      }
    });
    
    if (Object.keys(customFields).length > 0) {
      jsonObj["custom_fields"] = customFields;
    }
    return jsonObj;
  };
  
  let resultJson;
  if (selectionsList.length === 1) {
    resultJson = buildJsonObj(selectionsList[0]);
  } else {
    resultJson = selectionsList.map(buildJsonObj);
  }
  
  const jsonString = JSON.stringify(resultJson, null, 2);
  copyToClipboard(jsonString);
  showToast("🧩 JSON 格式複製成功！", "success");
}

function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).catch(err => {
      fallbackCopyToClipboard(text);
    });
  } else {
    fallbackCopyToClipboard(text);
  }
}

function fallbackCopyToClipboard(text) {
  const temp = document.createElement("textarea");
  temp.value = text;
  // Make temporary element off-screen
  temp.style.position = "fixed";
  temp.style.left = "-9999px";
  document.body.appendChild(temp);
  temp.focus();
  temp.select();
  try {
    document.execCommand("copy");
  } catch (err) {
    console.error("Fallback copy failed", err);
  }
  document.body.removeChild(temp);
}

// ---------------------------------
// State Persistence (Auto Save)
// ---------------------------------

function saveStateToStorage() {
  const data = {
    columnCount: state.columnCount,
    generateCount: state.generateCount || 1,
    columns: state.columns.map(col => ({
      id: col.id,
      title: col.title,
      content: col.content,
      active: col.active,
      lockedValue: col.lockedValue || null,
      category: col.category || "",
      priority: typeof col.priority === "number" ? col.priority : 0
    })),
    alwaysTags: state.alwaysTags.map(tag => ({
      id: tag.id,
      text: tag.text,
      enabled: tag.enabled,
      position: tag.position
    })),
    settings: {
      useTitles: state.settings.useTitles,
      useComma: state.settings.useComma
    }
  };
  
  localStorage.setItem(`${STORAGE_PREFIX}current_state`, JSON.stringify(data));
}

function loadStateFromStorage() {
  const stored = localStorage.getItem(`${STORAGE_PREFIX}current_state`);
  if (!stored) {
    // Fill defaults on first load
    prefillDefaultOnFirstLoad();
    return;
  }
  
  try {
    const data = JSON.parse(stored);
    state.columnCount = data.columnCount || 12;
    state.generateCount = data.generateCount || 1;
    state.columns = data.columns || [];
    state.columns.forEach(ensureColumnDefaults);
    state.alwaysTags = data.alwaysTags || [];
    if (data.settings) {
      state.settings.useTitles = data.settings.useTitles !== false;
      state.settings.useComma = data.settings.useComma !== false;
    }
  } catch (e) {
    console.error("Failed to load state from localStorage", e);
    prefillDefaultOnFirstLoad();
  }
}

function prefillDefaultOnFirstLoad() {
  state.columnCount = 12;
  state.generateCount = 1;
  state.columns = [];
  for (let i = 1; i <= 12; i++) {
    state.columns.push({
      id: Date.now() + i * 10,
      title: DEFAULT_TITLES[i - 1],
      content: DEFAULT_CONTENTS[i] || "",
      active: true,
      category: "",
      priority: 0
    });
  }
  activeCategoryTab = "__all__";
  state.alwaysTags = [
    {
      id: Date.now() + 100,
      text: DEFAULT_ALWAYS_TAGS.join("\n"),
      enabled: true,
      position: "end"
    }
  ];
  state.settings.useTitles = true;
  state.settings.useComma = true;
  saveStateToStorage();
}

// ---------------------------------
// Preset Management Logic
// ---------------------------------

const PRESETS_KEY = `${STORAGE_PREFIX}presets_list`;

function getPresetsFromStorage() {
  const stored = localStorage.getItem(PRESETS_KEY);
  if (!stored) return {};
  try {
    return JSON.parse(stored);
  } catch (e) {
    return {};
  }
}

function savePresetsToStorage(presets) {
  localStorage.setItem(PRESETS_KEY, JSON.stringify(presets));
}

function renderPresetsDropdown() {
  const presets = getPresetsFromStorage();
  const select = elements.presetSelect;
  const currentSelected = select.value;
  
  select.innerHTML = '<option value="">選擇設定檔...</option>';
  
  Object.keys(presets).sort().forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    select.appendChild(option);
  });
  
  if (presets[currentSelected]) {
    select.value = currentSelected;
  }
}

async function saveCurrentPreset() {
  const select = elements.presetSelect;
  const currentSelected = select.value;
  
  const name = await showCustomPrompt("儲存設定檔", "請輸入設定檔名稱：", currentSelected);
  if (!name || name.trim() === "") return;
  
  const presets = getPresetsFromStorage();
  if (presets[name]) {
    const confirmOverwrite = await showCustomConfirm(
      "覆寫確認",
      `已存在名為「${name}」的設定檔，您確定要覆寫它嗎？`
    );
    if (!confirmOverwrite) return;
  }
  
  // Package current state
  presets[name] = {
    columnCount: state.columnCount,
    generateCount: state.generateCount || 1,
    columns: state.columns.map(col => ({
      title: col.title,
      content: col.content,
      active: col.active,
      lockedValue: col.lockedValue || null,
      category: col.category || "",
      priority: typeof col.priority === "number" ? col.priority : 0
    })),
    alwaysTags: state.alwaysTags.map(tag => ({
      text: tag.text,
      enabled: tag.enabled,
      position: tag.position
    })),
    settings: {
      useTitles: state.settings.useTitles,
      useComma: state.settings.useComma
    }
  };
  
  savePresetsToStorage(presets);
  renderPresetsDropdown();
  select.value = name;
  showToast(`💾 設定檔「${name}」已儲存`, "success");
}

async function loadSelectedPreset() {
  const select = elements.presetSelect;
  const name = select.value;
  if (!name || name === "") {
    showToast("請先從下拉選單選擇一個設定檔", "error");
    return;
  }
  
  const presets = getPresetsFromStorage();
  const presetData = presets[name];
  if (!presetData) {
    showToast("設定檔不存在", "error");
    return;
  }
  
  const confirmLoad = await showCustomConfirm(
    "載入設定檔",
    `確定要載入設定檔「${name}」嗎？這將會覆寫目前的編輯內容。`
  );
  if (!confirmLoad) return;
  
  // Restore preset
  loadPresetData(presetData);
  showToast(`📂 設定檔「${name}」已載入`, "success");
  generatePrompt();
}

function loadPresetData(data) {
  // Check if it's old format or new format
  if (Array.isArray(data.titles) || (data.columns && !data.columns[0]?.hasOwnProperty("content"))) {
    // Migrate old format (which had separate columns and titles arrays)
    migrateOldPresetFormat(data);
  } else {
    // New format loading
    state.columnCount = data.columnCount || 12;
    state.generateCount = data.generateCount || 1;
    state.columns = (data.columns || []).map((col, idx) => ({
      id: Date.now() + idx * 10,
      title: col.title || "",
      content: col.content || "",
      active: col.active !== false,
      lockedValue: col.lockedValue || null,
      category: col.category || "",
      priority: typeof col.priority === "number" ? col.priority : 0
    }));
    
    // Restore Always tags
    if (Array.isArray(data.alwaysTags)) {
      state.alwaysTags = data.alwaysTags.map((tag, idx) => ({
        id: Date.now() + idx * 10 + 500,
        text: tag.text || "",
        enabled: tag.enabled !== false,
        position: tag.position || "end"
      }));
    } else if (typeof data.alwaysTags === "string") {
      state.alwaysTags = [
        {
          id: Date.now() + 500,
          text: data.alwaysTags,
          enabled: data.includeAlways !== false,
          position: "end"
        }
      ];
    } else {
      state.alwaysTags = [];
    }
    
    if (data.settings) {
      state.settings.useTitles = data.settings.useTitles !== false;
      state.settings.useComma = data.settings.useComma !== false;
    }
  }
  
  activeCategoryTab = "__all__";
  saveStateToStorage();
  renderAll();
}

function migrateOldPresetFormat(oldData) {
  // Old format has:
  // - columns: array of strings (the contents)
  // - titles/labels: array of strings (the titles) - wait, could be under titles or undefined
  // - alwaysTags: string
  // - useTitles, includeAlways, useComma
  
  const colContents = oldData.columns || [];
  const colTitles = oldData.titles || DEFAULT_TITLES;
  
  state.columnCount = colContents.length || 12;
  state.columns = [];
  
  for (let i = 0; i < state.columnCount; i++) {
    state.columns.push({
      id: Date.now() + i * 10,
      title: colTitles[i] || "",
      content: colContents[i] || "",
      active: true,
      category: "",
      priority: 0
    });
  }
  
  state.alwaysTags = [
    {
      id: Date.now() + 500,
      text: typeof oldData.alwaysTags === "string" ? oldData.alwaysTags : (oldData.alwaysText || ""),
      enabled: oldData.includeAlways !== false,
      position: "end"
    }
  ];
  
  state.settings.useTitles = oldData.useTitles !== false;
  state.settings.useComma = oldData.useComma !== false;
}

async function deleteSelectedPreset() {
  const select = elements.presetSelect;
  const name = select.value;
  if (!name || name === "") {
    showToast("請選擇要刪除的設定檔", "error");
    return;
  }
  
  const confirmDelete = await showCustomConfirm(
    "刪除設定檔",
    `您確定要永久刪除設定檔「${name}」嗎？此操作將無法還原。`,
    true
  );
  if (!confirmDelete) return;
  
  const presets = getPresetsFromStorage();
  delete presets[name];
  
  savePresetsToStorage(presets);
  select.value = "";
  renderPresetsDropdown();
  showToast(`🗑️ 設定檔「${name}」已刪除`, "success");
}

// Export all presets to JSON file
function exportPresetsToFile() {
  const presets = getPresetsFromStorage();
  if (Object.keys(presets).length === 0) {
    showToast("當前無任何儲存的設定檔可匯出", "error");
    return;
  }
  
  const fileContent = JSON.stringify(presets, null, 2);
  const blob = new Blob([fileContent], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement("a");
  a.href = url;
  a.download = `aura_presets_${new Date().toISOString().slice(0,10)}.json`;
  document.body.appendChild(a);
  a.click();
  
  // Cleanup
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
  
  showToast("⬇️ 設定檔已成功下載匯出", "success");
}

// Import presets from JSON file
function importPresetsFromFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  // 立即清空 file input 的值，確保後續不論成功或失敗，下次選同檔案都能觸發 change 事件
  event.target.value = "";
  
  const reader = new FileReader();
  reader.onerror = function() {
    showToast("讀取檔案時發生錯誤", "error");
  };
  reader.onload = async function(e) {
    try {
      const importedData = JSON.parse(e.target.result);
      if (typeof importedData !== "object" || importedData === null || Array.isArray(importedData)) {
        throw new Error("格式錯誤：必須是 JSON 物件");
      }
      
      // Determine if they are importing a direct single preset file or a presets pack
      let isPresetsPack = true;
      
      // Check if this file is actually a single preset directly (has columns but no names as root keys)
      if (importedData.hasOwnProperty("columns") || 
          importedData.hasOwnProperty("titles") || 
          importedData.hasOwnProperty("columnCount") ||
          importedData.hasOwnProperty("alwaysTags") ||
          importedData.hasOwnProperty("settings") ||
          importedData.hasOwnProperty("generateCount") ||
          importedData.hasOwnProperty("includeAlways")) {
        isPresetsPack = false;
      }
      
      // Step 1: Confirm load
      const confirmImport = await showCustomConfirm(
        "匯入設定檔",
        isPresetsPack 
          ? "偵測到多組設定檔包。是否確認載入此設定檔包？" 
          : "偵測到這是單一設定檔。是否要將其載入為新的設定檔？",
        false
      );
      
      if (!confirmImport) {
        return; // 使用者點選取消，安全退出
      }
      
      const currentPresets = getPresetsFromStorage();
      
      if (isPresetsPack) {
        // Step 2: Merge or overwrite confirmation
        const mergeChoice = await showCustomConfirm(
          "合併或覆寫",
          "您要與現有的設定檔「合併」嗎？（點選「取消」則會完全「覆寫」清空現有設定檔）",
          false
        );
        
        let finalPresets = mergeChoice ? { ...currentPresets } : {};
        
        // Ask for a prefix to avoid collisions
        const prefix = await showCustomPrompt(
          "命名識別碼（選填）", 
          "可為匯入的設定檔加上前綴以利識別（例如輸入 'MJ' -> 變成 'MJ - 設定檔名稱'）：", 
          ""
        );
        
        Object.keys(importedData).forEach(name => {
          const val = importedData[name];
          // 驗證子項目必須是有效物件且非陣列
          if (typeof val === "object" && val !== null && !Array.isArray(val)) {
            const finalName = prefix && prefix.trim() !== "" ? `${prefix.trim()} - ${name}` : name;
            finalPresets[finalName] = val;
          }
        });
        
        savePresetsToStorage(finalPresets);
        renderPresetsDropdown();
        showToast("⬆️ 設定檔包匯入並儲存完成！", "success");
      } else {
        // Single preset importing
        const presetName = await showCustomPrompt(
          "設定檔名稱", 
          "請為匯入的單一設定檔命名：", 
          file.name.replace(".json", "")
        );
        if (!presetName || presetName.trim() === "") {
          return; // 使用者取消命名，安全退出
        }
        
        currentPresets[presetName] = importedData;
        savePresetsToStorage(currentPresets);
        renderPresetsDropdown();
        elements.presetSelect.value = presetName;
        showToast(`⬆️ 已儲存匯入的設定檔「${presetName}」`, "success");
      }
      
    } catch (err) {
      console.error(err);
      showToast(`匯入失敗：${err.message || 'JSON 解析錯誤'}`, "error");
    }
  };
  
  reader.readAsText(file);
}

// ---------------------------------
// Toast Notification System
// ---------------------------------

function showToast(message, type = "info") {
  const container = elements.toastContainer;
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  // Icon mapping
  let icon = "✨";
  if (type === "success") icon = "✅";
  if (type === "error") icon = "❌";
  if (type === "info") icon = "ℹ️";
  
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-text">${message}</span>`;
  container.appendChild(toast);
  
  // Trigger slide in
  setTimeout(() => {
    toast.classList.add("show");
  }, 10);
  
  // Remove toast
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      container.removeChild(toast);
    }, 250); // transition duration
  }, 3000);
}

// ---------------------------------
// Custom Modal Dialog Functions
// ---------------------------------

function showCustomConfirm(title, message, isDanger = false) {
  return new Promise((resolve) => {
    // Cancel any pending hide timer from the previous dialog (fixes race condition)
    if (modalHideTimeout) {
      clearTimeout(modalHideTimeout);
      modalHideTimeout = null;
    }
    
    modalResolver = resolve;
    
    elements.modalTitle.textContent = title;
    elements.modalMessage.textContent = message;
    elements.modalInput.style.display = "none";
    
    elements.modalCancelBtn.style.display = "inline-flex";
    elements.modalConfirmBtn.textContent = "確認";
    
    if (isDanger) {
      elements.modalConfirmBtn.className = "btn btn-danger";
    } else {
      elements.modalConfirmBtn.className = "btn btn-primary";
    }
    
    // Open
    elements.customModal.style.display = "flex";
    setTimeout(() => {
      elements.customModal.classList.add("active");
    }, 10);
    
    elements.modalConfirmBtn.focus();
  });
}

function showCustomPrompt(title, message, defaultValue = "") {
  return new Promise((resolve) => {
    // Cancel any pending hide timer from the previous dialog (fixes race condition)
    if (modalHideTimeout) {
      clearTimeout(modalHideTimeout);
      modalHideTimeout = null;
    }
    
    modalResolver = resolve;
    
    elements.modalTitle.textContent = title;
    elements.modalMessage.textContent = message;
    
    elements.modalInput.style.display = "block";
    elements.modalInput.value = defaultValue;
    
    elements.modalCancelBtn.style.display = "inline-flex";
    elements.modalConfirmBtn.textContent = "儲存";
    elements.modalConfirmBtn.className = "btn btn-primary";
    
    // Open
    elements.customModal.style.display = "flex";
    setTimeout(() => {
      elements.customModal.classList.add("active");
    }, 10);
    
    elements.modalInput.focus();
    elements.modalInput.select();
  });
}

function closeModal(approved) {
  const modal = elements.customModal;
  modal.classList.remove("active");
  
  // Store timeout ID so it can be cancelled if a new dialog opens immediately
  modalHideTimeout = setTimeout(() => {
    modal.style.display = "none";
    modalHideTimeout = null;
  }, 250);
  
  if (modalResolver) {
    if (approved) {
      if (elements.modalInput.style.display === "block") {
        modalResolver(elements.modalInput.value);
      } else {
        modalResolver(true);
      }
    } else {
      modalResolver(null);
    }
    modalResolver = null;
  }
}

// ==============================================
// Portable Pack — 便攜包匯出 / 還原
// ==============================================

const PORTABLE_VERSION = 1;
const PORTABLE_TYPE    = "aura_portable_backup";

/**
 * 匯出便攜包
 * 將 current_state 與 presets_list 打包成一個 JSON 檔案下載
 */
function exportPortablePack() {
  const currentState = localStorage.getItem(`${STORAGE_PREFIX}current_state`);
  const presets      = localStorage.getItem(PRESETS_KEY);
  
  const pack = {
    _type:        PORTABLE_TYPE,
    _version:     PORTABLE_VERSION,
    _exportedAt:  new Date().toISOString(),
    _appName:     "Aura Prompt Generator",
    current_state: currentState ? JSON.parse(currentState) : null,
    presets:       presets      ? JSON.parse(presets)      : {}
  };
  
  const hasState   = !!pack.current_state;
  const presetCount = Object.keys(pack.presets).length;
  
  if (!hasState && presetCount === 0) {
    showToast("目前沒有任何資料可以打包", "error");
    return;
  }
  
  const fileContent = JSON.stringify(pack, null, 2);
  const blob = new Blob([fileContent], { type: "application/json" });
  const url  = URL.createObjectURL(blob);
  
  const a = document.createElement("a");
  a.href     = url;
  a.download = `aura_portable_${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
  
  const summary = [
    hasState   ? "工作狀態" : null,
    presetCount > 0 ? `${presetCount} 個設定檔` : null
  ].filter(Boolean).join("、");
  
  showToast(`📦 便攜包已匯出（包含：${summary}）`, "success");
}

/**
 * 還原便攜包
 * 從使用者選取的 JSON 檔案中讀取並還原所有資料
 */
async function importPortablePack(event) {
  const file = event.target.files[0];
  // Reset input so the same file can be selected again
  event.target.value = "";
  
  if (!file) return;
  
  const reader = new FileReader();
  
  reader.onload = async function(e) {
    try {
      const pack = JSON.parse(e.target.result);
      
      // 格式驗證
      if (!pack || typeof pack !== "object" || Array.isArray(pack)) {
        throw new Error("無效的 JSON 格式");
      }
      if (pack._type !== PORTABLE_TYPE) {
        throw new Error(
          `此檔案不是便攜包格式（_type 欄位不符）。\n` +
          `如果您想匯入設定檔，請使用「設定檔管理」區的「⬆️ 匯入」功能。`
        );
      }
      
      const hasState    = !!pack.current_state;
      const packPresets = (pack.presets && typeof pack.presets === "object" && !Array.isArray(pack.presets))
        ? pack.presets
        : {};
      const presetCount = Object.keys(packPresets).length;
      const exportDate  = pack._exportedAt
        ? new Date(pack._exportedAt).toLocaleString("zh-TW")
        : "未知";
      
      // ── 步驟 1：確認是否要還原 ──
      const confirmLoad = await showCustomConfirm(
        "還原便攜包",
        `偵測到便攜包（匯出時間：${exportDate}）\n\n` +
        `包含：${hasState ? "工作狀態 ✓" : "工作狀態 ✗"}、` +
        `${presetCount} 個設定檔\n\n` +
        `確認要還原此便攜包嗎？`,
        false
      );
      if (!confirmLoad) return;
      
      // ── 步驟 2：還原模式選擇 ──
      // true = 合併（保留目前工作狀態，只合併設定檔）
      // false/null = 完全覆寫（工作狀態 + 設定檔全部替換）
      const mergeOnly = await showCustomConfirm(
        "還原模式",
        "選擇「確認」→ 合併模式：保留目前工作狀態，僅合併設定檔\n" +
        "選擇「取消」→ 完全覆寫：工作狀態與設定檔全部替換為便攜包內容",
        false
      );
      // mergeOnly = true → 確認（合併），null → 取消（覆寫）
      const isFullOverwrite = (mergeOnly === null);
      
      // ── 步驟 3：套用資料 ──
      
      // 3a. 工作狀態
      // 完全覆寫模式：替換工作狀態；合併模式：保留原有工作狀態
      if (isFullOverwrite && hasState) {
        localStorage.setItem(`${STORAGE_PREFIX}current_state`, JSON.stringify(pack.current_state));
      }
      // 合併模式 (mergeOnly = true) → 不動 current_state
      
      // 3b. 設定檔
      if (presetCount > 0) {
        if (isFullOverwrite) {
          // 完全覆寫設定檔
          savePresetsToStorage(packPresets);
        } else {
          // 合併模式：與現有設定檔合併（便攜包優先）
          const existingPresets = getPresetsFromStorage();
          const merged = { ...existingPresets, ...packPresets };
          savePresetsToStorage(merged);
        }
      } else if (isFullOverwrite) {
        // 完全覆寫，但沒有設定檔 → 清空設定檔
        savePresetsToStorage({});
      }
      
      // ── 步驟 4：重新整理畫面 ──
      loadStateFromStorage();
      renderAll();
      
      const modeLabel = isFullOverwrite ? "完全覆寫" : "合併";
      showToast(
        `📥 便攜包還原完成（${modeLabel}模式，包含 ${presetCount} 個設定檔）`,
        "success"
      );
      
    } catch (err) {
      console.error("[PortablePack] 還原失敗", err);
      showToast(`還原失敗：${err.message || "JSON 解析錯誤"}`, "error");
    }
  };
  
  reader.readAsText(file);
}
