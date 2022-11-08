const text=[
    `I'm baby master cleanse mumblecore etsy meditation. Banjo hashtag typewriter salvia. Intelligentsia messenger bag gatekeep fashion axe bespoke ennui. Narwhal shaman affogato you probably haven't heard of them enamel pin wolf echo park edison bulb selvage vinyl cray post-ironic scenester. Everyday carry pinterest iPhone williamsburg kitsch poke. Paleo Brooklyn blue bottle fam. 8-bit tumblr helvetica, blue bottle woke try-hard taiyaki.`,
    `Listicle prism sus raw denim glossier tofu, af coloring book cornhole next level pour-over. Vegan kogi keytar heirloom four dollar toast cred same chia wolf tousled selvage next level etsy yuccie. Woke sriracha pug knausgaard chia jianbing tattooed letterpress selvage kogi mlkshk. Vape tousled mustache gentrify, sustainable whatever pour-over authentic cray narwhal occupy crucifix live-edge taxidermy. Umami glossier hella, hammock sus jean shorts copper mug vice distillery adaptogen cred selvage meditation bicycle rights pitchfork. Taiyaki locavore wolf chicharrones sus truffaut aesthetic bushwick twee squid thundercats pug meditation lumbersexual skateboard.`,
    `Banjo meditation kickstarter butcher, craft beer woke prism pitchfork VHS tote bag yr fanny pack. Pitchfork post-ironic lo-fi vexillologist actually copper mug gochujang green juice organic VHS shoreditch franzen. Tonx banjo sartorial messenger bag pour-over distillery fit knausgaard Brooklyn, 3 wolf moon deep v shabby chic iPhone normcore celiac. XOXO pour-over single-origin coffee, cray blog godard master cleanse poutine green juice etsy gastropub VHS tattooed next level meggings. Migas trust fund neutra ethical shoreditch ugh forage kickstarter venmo palo santo beard ennui pop-up coloring book. Etsy occupy vice tonx fashion axe taxidermy blue bottle keffiyeh kale chips mlkshk kitsch four loko taiyaki mustache hashtag. Tote bag celiac austin post-ironic hella, master cleanse gochujang sustainable ascot.`,
    `IPhone put a bird on it meggings, banjo kinfolk photo booth normcore. Bitters lyft keffiyeh art party, banjo cloud bread DIY chia drinking vinegar cred organic kinfolk. Microdosing master cleanse jianbing pug wayfarers af yes plz literally viral leggings. Asymmetrical subway tile austin pabst synth, sriracha craft beer everyday carry ugh vice skateboard. Flannel distillery cliche, organic adaptogen flexitarian gochujang chartreuse subway tile before they sold out lumbersexual.`,
    `Yuccie offal authentic franzen gochujang. Normcore glossier cloud bread fanny pack. Readymade XOXO gochujang stumptown. Bitters paleo fingerstache thundercats, biodiesel blue bottle craft beer gatekeep dreamcatcher pickled authentic occupy bushwick. Meditation Brooklyn ethical skateboard sartorial la croix. Kombucha trust fund stumptown, kale chips ennui swag irony chartreuse hella fit activated charcoal umami keytar.`,
    `Echo park williamsburg tacos leggings schlitz pickled typewriter everyday carry polaroid asymmetrical farm-to-table gatekeep four loko 8-bit. Leggings chicharrones mukbang, lo-fi four loko kitsch fingerstache. Echo park kale chips activated charcoal four loko, plaid master cleanse poutine umami you probably haven't heard of them hell of hexagon subway tile. Prism direct trade master cleanse deep v big mood blue bottle vaporware biodiesel tattooed pour-over scenester retro chartreuse. Messenger bag big mood lo-fi, roof party cloud bread jianbing ascot cardigan wolf post-ironic. Disrupt copper mug chillwave adaptogen irony polaroid before they sold out kombucha.`,
    `Tilde af tonx, thundercats cliche tbh everyday carry you probably haven't heard of them. Pour-over chicharrones tofu tbh, polaroid enamel pin tonx. Pork belly mumblecore tote bag +1 DSA jianbing. Seitan williamsburg sustainable food truck marfa.`,
    `Selfies lumbersexual kinfolk unicorn chia retro live-edge 90's vinyl kitsch raw denim direct trade. Plaid wolf 8-bit wayfarers venmo ugh migas actually. Franzen chicharrones fixie hoodie direct trade vexillologist occupy flexitarian drinking vinegar banjo. Banh mi cray ascot, try-hard whatever gluten-free fashion axe.`,
    `Mlkshk thundercats subway tile shabby chic tbh quinoa, DIY austin slow-carb knausgaard you probably haven't heard of them food truck. Biodiesel salvia vibecession, franzen VHS tumblr knausgaard taxidermy fashion axe venmo. Chartreuse sriracha copper mug pickled skateboard authentic neutra bespoke kinfolk glossier typewriter. Pour-over jianbing occupy vinyl pop-up, waistcoat coloring book hell of freegan.`,
    `Pop-up mumblecore chambray 3 wolf moon. Health goth drinking vinegar lumbersexual, roof party kitsch ethical synth cray readymade kale chips banh mi squid organic gatekeep same. Succulents banjo affogato enamel pin keffiyeh, forage pitchfork quinoa. Pitchfork live-edge XOXO normcore plaid artisan meggings. Man bun drinking vinegar salvia, bruh hashtag tousled distillery affogato wayfarers banh mi iceland messenger bag gluten-free. Shabby chic umami cornhole, vinyl stumptown you probably haven't heard of them cray tumblr artisan etsy cronut kogi. Wolf prism chambray sus la croix everyday carry mixtape fingerstache kinfolk polaroid marfa JOMO franzen post-ironic.`
]
const form=document.querySelector(".lorem-form");
const numofpara = document.getElementById("numofpara")
const numofparaRange=document.getElementById("numofparaRange");
const result=document.querySelector(".lorem-text");
function syncParaNumbers(e){
    const value=e.target.value;
    numofpara.value=value;
    numofparaRange.value=value;

}
form.addEventListener('submit',e=>{
    e.preventDefault();
    const value=parseInt(numofpara.value);
    let tempText=text.slice(0,value);
    tempText=tempText.map(item=>`<p class="result">${item}</p>`).join("");
    result.innerHTML=tempText;
})
numofpara.addEventListener('input',syncParaNumbers);
numofparaRange.addEventListener('input',syncParaNumbers);