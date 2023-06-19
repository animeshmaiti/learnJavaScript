let jokes=[
"Why did the barber win the race? He knew a shortcut.",
"What rhymes with orange? No it doesn't.",
"What's a didgeridoo? Whatever it wants to.",
"Where do hamburgers go to dance? They go to the meat-ball.",
"What did the swordfish say to the marlin? You're looking sharp.",
"What did the chip say when he saw the cheese stealing? Hey, that's Nachos.",
"What do elves learn at school? The elf-abet.",
"Why couldn't the bike stand up? It was too tired.",
"Put the cat out? I didn't know it was on fire.",
"Why did the chicken get a penalty? For fowl play.",
"Why was the student's report card wet? It was below C level!",
"Where do beef burgers go to dance? The meatball.",
"What's the best time to go to the dentist? Tooth hurty.",
"When does a joke become a dad joke? When the punch line becomes apparent.",
"Why did the scientist take out his doorbell? He wanted to win the no-bell prize.",
"What do you call a T-Rex that's been beaten up? Dino-sore.",
"When is the best time to go to the dentist? Tooth-hurty!",
"What gets wetter the more it dries? A towel.",
"Where do pencils go on vacation? Pencil-vania.",
"How does the ocean say hello? It waves.",
"It's Jamaican hairstyle day at work tomorrow. I'm dreading it.",
"How many tickles does it take to get an octopus to laugh? Ten-tickles.",
"How do you impress a female baker? Bring her flours.",
"Why did the computer go to the doctor? It had a virus.",
"What do you get when you cross a snake with a pie? A pie-thon!",
"Have you heard about the pregnant bed bug? She's going to have her baby in the spring.",
"Why did the boy bring the ladder to school? He was going to high school.",
"How do billboards talk? Sign language.",
"What happens if a frog parks illegally? They get toad.",
"Why did the drum take a nap? It was beat.",
"What kind of shoes do ninjas wear? Sneakers",
"What's the most musical part of the chicken? The drumstick.",
"Why was the sand wet? Because the sea weed.",
"Most comedians are good, trustworthy people. Yep, they're a bunch of stand-up guys.",
"What comes down, but never comes up? Rain.",
"Why did Santa study music at college? To improve his rapping skills.",
"Why do bananas wear sun cream? To stop them from peeling.",
"Why did the bicycle fall over? Because it was two tired.",
"Why are teddy bears never hungry? Because they're always stuffed.",
"Why couldn't the bad sailor learn his alphabet? Because he always got lost at C.",
"Why wouldn't the shrimp share his food? Because he was a little shellfish.",
"What did one penny say to another penny? We make cents.",
"What's a snake's favorite subject? Hisstory.",
"Why did the melon jump into the lake? It wanted to be a water-melon.",
"What did the axe murderer say to the judge? It was an axe-ident.",
"Why shouldn't you play cards on the savannah? Because of all the cheetahs.",
"Where do cows go for entertainment? The mooooo-vies!",
"How much did the pirate's new earrings cost him? A buccaneer!",
"Everyone has it, and no one can lose it. What is it? A shadow.",
"Why can't you trust the king of the jungle? Because he's always lion.",
]
let i=50;
let num= Math.floor(Math.random() * i);
let container=document.getElementById('container');
container.innerHTML=`<h1>"${jokes[num]}"</h1>`
const generate=()=>{
let num= Math.floor(Math.random() * i);
let container=document.getElementById('container');
container.innerHTML=`<h1>"${jokes[num]}"</h1>`
let delResult = jokes.splice(num,1);
i--
console.log('joke left: ',i,'\ndeleted result: ',delResult,'\ngenerated num: ',num)
}