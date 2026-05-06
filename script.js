// ═══════════════════════════════════════
// PRODUCTS DATA
// ═══════════════════════════════════════
const PRODUCTS_DATA = [
  {id:1,name:"Moisturising Cream",size:"177 gm",price:1750,salePrice:null,category:"moisturiser",images:[],sales:312,stock:15,rating:4.9,isNew:false,skinType:["dry","sensitive","all-skin"],concerns:["dryness"],ingredients:"Ceramide NP, Ceramide AP, Ceramide EOP, Hyaluronic Acid, Niacinamide, Glycerin, Petrolatum.",description:"CeraVe Moisturising Cream provides 24-hour hydration with three essential ceramides, hyaluronic acid and MVE technology that continuously releases moisture throughout the day.",howToUse:"Apply generously to face and/or body morning and night. Safe for use on face."},
  {id:2,name:"Moisturising Cream (Tube)",size:"227 gm",price:2250,salePrice:null,category:"moisturiser",images:[],sales:198,stock:9,rating:4.8,isNew:false,skinType:["dry","sensitive","all-skin"],concerns:["dryness"],ingredients:"Ceramide NP, Ceramide AP, Ceramide EOP, Hyaluronic Acid, Niacinamide, Dimethicone.",description:"The same beloved CeraVe formula in a convenient tube format. Restores and maintains the skin barrier with three essential ceramides and hyaluronic acid.",howToUse:"Apply to face and body as needed. Suitable for daily use, morning and night."},
  {id:3,name:"Moisturising Cream",size:"340 gm",price:2650,salePrice:null,category:"moisturiser",images:[],sales:256,stock:11,rating:4.9,isNew:false,skinType:["dry","sensitive","all-skin"],concerns:["dryness"],ingredients:"Ceramide NP, Ceramide AP, Ceramide EOP, Hyaluronic Acid, Niacinamide, Glycerin.",description:"Economy size of the iconic CeraVe Moisturising Cream. Perfect for whole-body use with ceramides and hyaluronic acid for lasting deep hydration.",howToUse:"Apply generously to face and/or body. Ideal for post-shower use."},
  {id:4,name:"Moisturising Cream",size:"454 gm",price:2850,salePrice:null,category:"moisturiser",images:[],sales:178,stock:7,rating:4.8,isNew:false,skinType:["dry","sensitive","all-skin"],concerns:["dryness"],ingredients:"Ceramide NP, Ceramide AP, Ceramide EOP, Hyaluronic Acid, Petrolatum, Niacinamide.",description:"The large family-size CeraVe jar for whole-body moisturisation. Long-lasting hydration with ceramides, MVE technology and hyaluronic acid.",howToUse:"Apply to body generously after bathing. Can be used morning and night."},
  {id:5,name:"Moisturising Cream",size:"539 gm",price:3450,salePrice:null,category:"moisturiser",images:[],sales:134,stock:5,rating:4.9,isNew:false,skinType:["dry","sensitive","all-skin"],concerns:["dryness"],ingredients:"Ceramide NP, Ceramide AP, Ceramide EOP, Hyaluronic Acid, Niacinamide, Glycerin.",description:"Our largest size for extended family use. Deeply hydrates and restores the skin barrier with the trusted CeraVe 3-ceramide formula.",howToUse:"Apply generously to skin as needed. Suitable for all family members including children."},
  {id:6,name:"Hydrating Cleanser",size:"237 ml",price:2150,salePrice:null,category:"cleanser",images:[],sales:289,stock:18,rating:4.8,isNew:false,skinType:["dry","sensitive","all-skin"],concerns:["dryness","sensitive"],ingredients:"Hyaluronic Acid, Ceramide NP, Ceramide AP, Ceramide EOP, Niacinamide, Glycerin.",description:"A non-foaming, gentle cleanser that hydrates while cleansing. Maintains the skin barrier and won't strip away essential moisture.",howToUse:"Wet face, apply cleanser and gently massage. Rinse thoroughly. Use morning and night."},
  {id:7,name:"Acne Control Cleanser",size:"237 ml",price:2190,salePrice:null,category:"cleanser",images:[],sales:244,stock:14,rating:4.7,isNew:false,skinType:["oily","combination"],concerns:["acne","oily"],ingredients:"Salicylic Acid 2%, Niacinamide, Ceramide NP, Ceramide AP, Ceramide EOP, Zinc.",description:"Formulated with 2% Salicylic Acid and Niacinamide to help control acne and excess oil while maintaining the skin barrier.",howToUse:"Wet face, massage gently, leave 1-2 minutes. Rinse thoroughly. Use morning and/or night."},
  {id:8,name:"Foaming Facial Cleanser",size:"237 ml",price:2160,salePrice:null,category:"cleanser",images:[],sales:267,stock:16,rating:4.7,isNew:false,skinType:["oily","combination","sensitive"],concerns:["oily","acne"],ingredients:"Hyaluronic Acid, Ceramide NP, Ceramide AP, Ceramide EOP, Niacinamide.",description:"A rich foaming cleanser that removes oil, dirt and makeup while maintaining the skin barrier. Hyaluronic acid and ceramides prevent over-drying.",howToUse:"Wet face with lukewarm water, massage gently, rinse. Use morning and night."},
  {id:9,name:"Resurfacing Retinol Serum",size:"30 ml",price:2260,salePrice:null,category:"serum",images:[],sales:156,stock:10,rating:4.8,isNew:false,skinType:["all-skin","combination"],concerns:["aging","brightening"],ingredients:"Encapsulated Retinol, Licorice Root Extract, Ceramide NP, Niacinamide, Hyaluronic Acid.",description:"A gentle retinol serum with encapsulated retinol, licorice root extract and niacinamide to visibly smooth skin texture and reduce fine lines.",howToUse:"Apply a pea-sized amount to cleansed skin at night. Always follow with SPF in the morning. Start 2-3x per week."},
  {id:10,name:"Vitamin C Serum",size:"30 ml",price:2250,salePrice:1990,category:"serum",images:[],sales:143,stock:12,rating:4.7,isNew:true,skinType:["all-skin","dry","combination"],concerns:["brightening","aging"],ingredients:"L-Ascorbic Acid 10%, Vitamin B5, Hyaluronic Acid, Ceramide NP, Niacinamide.",description:"A brightening serum with 10% pure Vitamin C, hyaluronic acid and vitamin B5 that visibly brightens and evens skin tone.",howToUse:"Apply 3-4 drops to cleansed face in the morning. Follow with moisturiser and SPF."},
  {id:11,name:"Renewing SA Cleanser",size:"237 ml",price:2160,salePrice:null,category:"cleanser",images:[],sales:188,stock:13,rating:4.6,isNew:false,skinType:["combination","oily","sensitive"],concerns:["acne","oily"],ingredients:"Salicylic Acid, Lactic Acid, Hyaluronic Acid, Ceramide NP, Niacinamide.",description:"Contains Salicylic Acid, lactic acid and hyaluronic acid for gentle exfoliation that helps renew skin texture.",howToUse:"Wet face, massage gently in circular motions. Rinse thoroughly. Use daily."},
  {id:12,name:"Hydrating Mineral Sunscreen",size:"75 ml",price:2250,salePrice:null,category:"sunscreen",images:[],sales:211,stock:8,rating:4.8,isNew:false,skinType:["sensitive","dry","all-skin"],concerns:["sensitive"],ingredients:"Zinc Oxide 9.4%, Titanium Dioxide 7.4%, Ceramide NP, Hyaluronic Acid, Niacinamide.",description:"SPF 30 mineral sunscreen with zinc oxide and titanium dioxide. Provides broad spectrum protection while hydrating with hyaluronic acid and ceramides.",howToUse:"Apply liberally 15 minutes before sun exposure. Reapply every 2 hours."},
  {id:13,name:"Moisturising Cream (Baby)",size:"142 gm",price:2650,salePrice:null,category:"baby",images:[],sales:99,stock:6,rating:4.9,isNew:false,skinType:["sensitive","all-skin"],concerns:["sensitive","dryness"],ingredients:"Ceramide NP, Ceramide AP, Ceramide EOP, Hyaluronic Acid, Niacinamide.",description:"Specially formulated for delicate baby skin with 3 essential ceramides and hyaluronic acid. Fragrance-free, paraben-free and allergy-tested.",howToUse:"Gently massage into baby's skin as needed. Safe for daily use from birth."},
  {id:14,name:"Oil Control Moisturising Gel",size:"89 ml",price:2490,salePrice:null,category:"moisturiser",images:[],sales:167,stock:11,rating:4.6,isNew:false,skinType:["oily","combination"],concerns:["oily"],ingredients:"Niacinamide, Hyaluronic Acid, Ceramide NP, Ceramide AP, Ceramide EOP, Dimethicone.",description:"A lightweight gel moisturiser with Niacinamide and hyaluronic acid that hydrates without clogging pores. Visibly reduces oil and shine for up to 8 hours.",howToUse:"Apply to cleansed face morning and/or night. Can be used under makeup."},
  {id:15,name:"Ultra Light Moisturiser Gel",size:"52 ml",price:2350,salePrice:null,category:"moisturiser",images:[],sales:122,stock:9,rating:4.7,isNew:false,skinType:["oily","sensitive","combination"],concerns:["oily","sensitive"],ingredients:"Hyaluronic Acid, Ceramide NP, Ceramide AP, Ceramide EOP, Niacinamide, PEG-100 Stearate.",description:"An ultra-lightweight gel formula that provides hydration without heaviness. Absorbs instantly and leaves a smooth, matte finish.",howToUse:"Apply to cleansed face and blend. Can be used morning and night under SPF."},
  {id:16,name:"Night Cream",size:"48 gm",price:2450,salePrice:null,category:"moisturiser",images:[],sales:145,stock:7,rating:4.8,isNew:false,skinType:["dry","sensitive","all-skin"],concerns:["aging","dryness"],ingredients:"Retinol, Hyaluronic Acid, Ceramide NP, Ceramide AP, Ceramide EOP, Niacinamide.",description:"An overnight moisturiser with retinol and hyaluronic acid that improves texture and restores the skin barrier while you sleep.",howToUse:"Apply to face and neck as the last step of your evening routine. Use on alternate nights if new to retinol."},
  {id:17,name:"Cleanser + Moisturiser Combo",size:"237ml + 177gm",price:3900,salePrice:3499,category:"combo",images:[],sales:88,stock:15,rating:4.9,isNew:true,skinType:["dry","sensitive","all-skin"],concerns:["dryness"],ingredients:"Includes: Hydrating Cleanser (237ml) + Moisturising Cream (177gm). Full ingredients on individual products.",description:"Our most popular starter combo — everything you need for a complete daily routine. Hydrating Cleanser cleanses gently while the Moisturising Cream locks in hydration all day.",howToUse:"AM: Cleanse with Hydrating Cleanser, apply Moisturising Cream. PM: Repeat the same steps."},
  {id:18,name:"Acne Fighter Combo",size:"2-piece set",price:4200,salePrice:3799,category:"combo",images:[],sales:67,stock:10,rating:4.8,isNew:true,skinType:["oily","combination"],concerns:["acne","oily"],ingredients:"Includes: Acne Control Cleanser (237ml) + Oil Control Moisturising Gel (89ml). Full ingredients on individual products.",description:"The ultimate combo for acne-prone and oily skin. Salicylic acid cleanser clears pores while the oil-control gel hydrates without adding shine.",howToUse:"AM & PM: Use Acne Control Cleanser, follow with Oil Control Gel. Start slowly if new to SA."}
];

// ═══════════════════════════════════════
// BLOG DATA
// ═══════════════════════════════════════
const BLOG_POSTS = [
  {id:1,tag:"SKIN TIPS",title:"The Right Order to Apply Your Skincare Products",excerpt:"Most people get this wrong. Here's the exact sequence that makes every product work better.",date:"May 2025",content:`<h2>The Right Order to Apply Your Skincare Products</h2><p>Getting your skincare routine right isn't just about what products you use — it's about the order you apply them. The wrong order means active ingredients never reach your skin properly.</p><h3>The Golden Rule: Thinnest to Thickest</h3><p>Always apply products from the most watery/lightweight to the thickest. This ensures each layer can absorb before the next creates a barrier over it.</p><h3>Morning Routine Order</h3><p><strong>1. Cleanser</strong> — Start with a gentle cleanser like CeraVe Hydrating Cleanser to remove overnight oils without stripping your skin. <strong>2. Serum</strong> — Apply any active serums (Vitamin C in the morning for brightening). <strong>3. Moisturiser</strong> — Lock in hydration with CeraVe Moisturising Cream or the lightweight gel if you're oily. <strong>4. Sunscreen</strong> — This is non-negotiable. Apply SPF 30+ every single morning, even on cloudy days.</p><h3>Evening Routine Order</h3><p><strong>1. Cleanser</strong> — Double cleanse if you wear makeup. <strong>2. Treatment</strong> — Apply retinol (CeraVe Night Cream or Retinol Serum) only at night. <strong>3. Moisturiser</strong> — Seal everything in with a richer cream.</p><h3>Key Takeaway</h3><p>Wait 1-2 minutes between layers. Your skin needs a moment to absorb each product. Rushing means products just sit on top of each other.</p>`},
  {id:2,tag:"INGREDIENTS",title:"Ceramides Explained: Why Your Skin Can't Live Without Them",excerpt:"Every CeraVe product contains ceramides — but what actually are they and why do they matter so much?",date:"Apr 2025",content:`<h2>Ceramides Explained: Why Your Skin Can't Live Without Them</h2><p>CeraVe was built on ceramides. They're in every single product. But most people using CeraVe don't actually know what ceramides do — or why losing them is such a big deal.</p><h3>What Are Ceramides?</h3><p>Ceramides are lipids — a type of fat — that naturally exist in your skin. They make up about 50% of the outer layer of your skin (the stratum corneum). Think of your skin cells as bricks — ceramides are the mortar that holds them together and seals out moisture loss.</p><h3>What Happens When You Lose Ceramides?</h3><p>Age, harsh cleansers, hot water, pollution, and sun exposure all deplete your skin's ceramide levels. When ceramides drop, the skin barrier weakens. You get: dryness, flaking, irritation, redness, and increased sensitivity. Eczema and psoriasis are both strongly linked to ceramide deficiency.</p><h3>Why CeraVe Uses Three Types</h3><p>CeraVe products contain Ceramide NP, Ceramide AP, and Ceramide EOP — the three that are most abundant in healthy skin. Using all three together is more effective than any single ceramide. Their MVE technology also releases them slowly over 24 hours, so your skin keeps getting topped up all day.</p><h3>Bottom Line</h3><p>If you have dry, sensitive, or compromised skin — ceramides are the single most important ingredient to look for. And CeraVe is the most affordable, dermatologist-backed way to get them.</p>`},
  {id:3,tag:"SKIN QUIZ",title:"How to Build Your Routine Based on Your Skin Type",excerpt:"Dry, oily, combination or sensitive? Here's the exact CeraVe routine for each one.",date:"Mar 2025",content:`<h2>How to Build Your Routine Based on Your Skin Type</h2><p>Before you buy any skincare product, you need to know your skin type. Using the wrong product for your skin type can make things worse — not better.</p><h3>How to Identify Your Skin Type</h3><p>Wash your face with a gentle cleanser and wait 1 hour without applying anything. Then check: if your skin feels tight and looks flaky — you have <strong>dry skin</strong>. If it looks shiny all over — <strong>oily skin</strong>. Shiny T-zone but dry cheeks — <strong>combination</strong>. If it feels irritated or reactive — <strong>sensitive skin</strong>.</p><h3>Dry Skin Routine</h3><p>Cleanser: CeraVe Hydrating Cleanser. Moisturiser: CeraVe Moisturising Cream (the jar). The rich, ceramide-heavy formula is exactly what dry skin needs. Night: CeraVe Night Cream with retinol for gradual texture improvement.</p><h3>Oily / Acne-Prone Routine</h3><p>Cleanser: CeraVe Foaming Facial Cleanser or Acne Control Cleanser (with SA). Moisturiser: CeraVe Oil Control Gel — lightweight, mattifying, non-comedogenic. This combination clears without over-drying.</p><h3>Sensitive Skin Routine</h3><p>Cleanser: CeraVe Hydrating Cleanser (fragrance-free, no actives). Moisturiser: CeraVe Moisturising Cream. Sunscreen: CeraVe Hydrating Mineral Sunscreen SPF 30 — mineral filters are much gentler than chemical ones for reactive skin.</p><h3>Combination Skin Routine</h3><p>Use the Foaming Cleanser on T-zone only if needed, Hydrating Cleanser on dry areas. Moisturise with the Ultra Light Gel — it's light enough for oily zones but still hydrating for dry patches.</p>`}
];

// ═══════════════════════════════════════
// CONFIG & STATE
// ═══════════════════════════════════════
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'skinory2025';
const FREE_DELIVERY_THRESHOLD = 2500;

let cart = JSON.parse(localStorage.getItem('skinory_cart')||'[]');
let wishlist = JSON.parse(localStorage.getItem('skinory_wish')||'[]');
let orders = JSON.parse(localStorage.getItem('skinory_orders')||'[]');
let adminProds = JSON.parse(localStorage.getItem('skinory_prods')||JSON.stringify(PRODUCTS_DATA));
let reviews = JSON.parse(localStorage.getItem('skinory_reviews')||'{}');
let coupons = JSON.parse(localStorage.getItem('skinory_coupons')||JSON.stringify([{code:'SKINORY10',pct:10},{code:'WELCOME15',pct:15}]));
let activeCoupon = null;
let selectedPayment = 'bkash';
let galleryIndex = 0;
let modalQty = 1;
let currentModalProdId = null;
let reviewStars = 5;
let pendingImages = [];

// ═══════════════════════════════════════
// COUNTDOWN TIMER
// ═══════════════════════════════════════
(function initCountdown(){
  const key = 'skinory_flash_end';
  let end = parseInt(localStorage.getItem(key)||'0');
  if(!end || end < Date.now()) {
    end = Date.now() + 8*3600*1000;
    localStorage.setItem(key, end);
  }
  function tick(){
    const diff = Math.max(0, end - Date.now());
    const h = Math.floor(diff/3600000), m = Math.floor((diff%3600000)/60000), s = Math.floor((diff%60000)/1000);
    const el = id => document.getElementById(id);
    if(el('cd-h')) el('cd-h').textContent = String(h).padStart(2,'0');
    if(el('cd-m')) el('cd-m').textContent = String(m).padStart(2,'0');
    if(el('cd-s')) el('cd-s').textContent = String(s).padStart(2,'0');
    if(diff === 0) { const b = document.getElementById('flash-banner'); if(b) b.style.display='none'; }
  }
  tick(); setInterval(tick, 1000);
})();


// ═══════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════
function navigate(page){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(page+'-page').classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('active'));
  const n = document.getElementById('nav-'+page);
  if(n) n.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
  if(page==='products') renderProducts(adminProds);
  if(page==='admin') renderAdmin();
  if(page==='wishlist') renderWishlist();
  if(page==='blog') renderBlog();
}

function toggleMobileSearch(){
  const b = document.getElementById('nav-search-bar');
  b.classList.toggle('open');
  if(b.classList.contains('open')) document.getElementById('search-input').focus();
}

// ═══════════════════════════════════════
// BLOG
// ═══════════════════════════════════════
function renderBlog(){
  document.getElementById('blog-list-view').style.display='block';
  document.getElementById('blog-article-view').style.display='none';
  document.getElementById('blog-grid').innerHTML = BLOG_POSTS.map((p, index)=>`
    <div class="blog-card" onclick="openBlogPost(${p.id})">
      <div class="blog-img">0${index + 1}</div>
      <div class="blog-body">
        <span class="blog-tag">${p.tag}</span>
        <div class="blog-title">${p.title}</div>
        <div class="blog-excerpt">${p.excerpt}</div>
        <div class="blog-meta">📅 ${p.date} · 3 min read</div>
      </div>
    </div>`).join('');
}

function openBlogPost(id){
  const post = BLOG_POSTS.find(p=>p.id===id);
  if(!post) return;
  document.getElementById('blog-list-view').style.display='none';
  document.getElementById('blog-article-view').style.display='block';
  document.getElementById('blog-article-content').innerHTML = `
    <span class="blog-tag">${post.tag}</span>
    <div style="margin-top:12px;">${post.content}</div>
    <div style="margin-top:24px;padding:16px;background:var(--rose-l);border-radius:14px;">
      <div style="font-size:13px;font-weight:700;color:var(--rose);margin-bottom:8px;">📅 ${post.date} · 3 min read</div>
      <div style="font-size:13px;color:var(--text-m);">Questions? Chat with us on <strong>WhatsApp</strong> for personalised skincare advice.</div>
    </div>`;
  window.scrollTo({top:0,behavior:'smooth'});
}

function showBlogList(){
  document.getElementById('blog-list-view').style.display='block';
  document.getElementById('blog-article-view').style.display='none';
}

// ═══════════════════════════════════════
// SEARCH & FILTERS
// ═══════════════════════════════════════
function handleSearch(q){
  const s = q.trim().toLowerCase();
  navigate('products');
  if(s) renderProducts(adminProds.filter(p=>p.name.toLowerCase().includes(s)||p.category.toLowerCase().includes(s)||(p.ingredients||'').toLowerCase().includes(s)));
  else applyFilters();
}

function applyFilters(){
  const cat = document.getElementById('filter-category').value;
  const skin = document.getElementById('filter-skin').value;
  const concern = document.getElementById('filter-concern').value;
  const ing = document.getElementById('filter-ingredient').value;
  const sort = document.getElementById('filter-sort').value;
  let list = [...adminProds];
  if(cat!=='all') list = list.filter(p=>p.category===cat);
  if(skin!=='all') list = list.filter(p=>p.skinType.includes(skin));
  if(concern!=='all') list = list.filter(p=>p.concerns&&p.concerns.includes(concern));
  if(ing!=='all') list = list.filter(p=>(p.ingredients||'').toLowerCase().includes(ing));
  if(sort==='popular') list.sort((a,b)=>b.sales-a.sales);
  else if(sort==='new') list.sort((a,b)=>(b.isNew?1:0)-(a.isNew?1:0));
  else if(sort==='low') list.sort((a,b)=>effectivePrice(a)-effectivePrice(b));
  else if(sort==='high') list.sort((a,b)=>effectivePrice(b)-effectivePrice(a));
  else if(sort==='rating') list.sort((a,b)=>b.rating-a.rating);
  renderProducts(list);
}

function effectivePrice(p){ return p.salePrice||p.price; }

function setFilter(cat){ document.getElementById('filter-category').value=cat; applyFilters(); }

function filterByConcern(concern){
  navigate('products');
  setTimeout(()=>{
    document.getElementById('filter-concern').value=concern;
    applyFilters();
  },50);
}

// ═══════════════════════════════════════
// CARD BUILDER
// ═══════════════════════════════════════
function buildCard(p, rank, isBest){
  const inWish = wishlist.includes(p.id);
  const ep = effectivePrice(p);
  const stars = '★'.repeat(Math.floor(p.rating))+'☆'.repeat(5-Math.floor(p.rating));
  const catMap = {moisturiser:'Moisturiser',cleanser:'Cleanser',serum:'Serum',sunscreen:'Sunscreen',baby:'Baby',combo:'Combo'};
  const img = p.images&&p.images.length?p.images[0]:null;
  const imgInner = img?`<img src="${img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" onerror="this.style.display='none'">`:`<span class="img-placeholder-text">Skinory</span>`;
  const prodReviews = reviews[p.id]||[];
  const revCount = prodReviews.length;
  const tagHtml = rank>0?`<div class="best-rank">#${rank} Best Seller</div>`:
    p.isNew?`<div class="new-tag">NEW</div><div class="category-tag">${catMap[p.category]||p.category}</div>`:
    `<div class="category-tag">${catMap[p.category]||p.category}</div>`;
  const saleBadge = p.salePrice?`<div class="sale-tag">SALE</div>`:'';
  return `<div class="${isBest?'best-card':'product-card'}" onclick="openProductModal(${p.id})">
    ${tagHtml}${saleBadge}
    <button class="wish-btn${inWish?' active':''}" onclick="toggleWish(event,${p.id})">SAVE</button>
    ${p.stock<=5?`<div class="low-stock">Only ${p.stock} left!</div>`:''}
    <div class="product-img-wrap">${imgInner}</div>
    <div class="product-name">${p.name}</div>
    <div class="product-size">${p.size}</div>
    <div class="product-price">৳${ep.toLocaleString()}</div>
    ${p.salePrice?`<div class="product-orig-price">৳${p.price.toLocaleString()}</div>`:''}
    <div class="stars">${stars}</div>
    <div class="review-count">${revCount>0?revCount+' review'+(revCount>1?'s':''):'No reviews yet'}</div>
    ${isBest?`<div class="sold-badge">${p.sales} sold</div>`:''}
    <div class="card-btns">
      <button class="btn-cart" onclick="quickAddToCart(event,${p.id})">Add to Cart</button>
      <button class="btn-buy" onclick="quickBuyNow(event,${p.id})">Buy Now</button>
    </div>
  </div>`;
}

function renderBestSellers(){
  const sorted = [...adminProds].sort((a,b)=>b.sales-a.sales).slice(0,4);
  document.getElementById('best-sellers-grid').innerHTML = sorted.map((p,i)=>buildCard(p,i+1,true)).join('');
}

function renderProducts(list){
  const grid = document.getElementById('products-grid');
  if(!list||!list.length){
    grid.innerHTML='<div style="text-align:center;padding:60px;color:var(--text-s);grid-column:1/-1;">No products found.</div>';
    document.getElementById('filter-count').textContent='0 products';
    return;
  }
  grid.innerHTML = list.map(p=>buildCard(p,0,false)).join('');
  document.getElementById('filter-count').textContent=list.length+' products';
}

function renderWishlist(){
  const grid = document.getElementById('wishlist-grid');
  const items = adminProds.filter(p=>wishlist.includes(p.id));
  if(!items.length){
    grid.innerHTML='<div style="text-align:center;grid-column:1/-1;padding:60px 20px;color:var(--text-s);"><p style="font-size:15px;margin-bottom:16px;">Your wishlist is empty</p><button class="btn-primary" onclick="navigate(\'products\')">Browse Products</button></div>';
    return;
  }
  grid.innerHTML = items.map(p=>buildCard(p,0,false)).join('');
}

// ═══════════════════════════════════════
// WISHLIST
// ═══════════════════════════════════════
function toggleWish(e,id){
  e.stopPropagation();
  const idx = wishlist.indexOf(id);
  if(idx>-1){wishlist.splice(idx,1);showToast('Removed from wishlist');}
  else{wishlist.push(id);showToast('Added to wishlist!');}
  localStorage.setItem('skinory_wish',JSON.stringify(wishlist));
  renderBestSellers();
  if(document.getElementById('products-page').classList.contains('active')) applyFilters();
  if(document.getElementById('wishlist-page').classList.contains('active')) renderWishlist();
}

// ═══════════════════════════════════════
// GALLERY
// ═══════════════════════════════════════
function buildGallery(images, fallback){
  galleryIndex = 0;
  const track = document.getElementById('gallery-track');
  const dots = document.getElementById('gallery-dots');
  const prev = document.getElementById('gal-prev');
  const next = document.getElementById('gal-next');
  if(!images||!images.length){
    track.innerHTML=`<div class="gallery-slide"><span class="slide-placeholder">${fallback}</span></div>`;
    dots.innerHTML=''; prev.style.display=next.style.display='none'; return;
  }
  track.innerHTML=images.map(src=>`<div class="gallery-slide"><img src="${src}" alt="" onerror="this.parentNode.innerHTML='<span class=slide-placeholder>${fallback}</span>'"/></div>`).join('');
  dots.innerHTML=images.map((_,i)=>`<button class="gallery-dot${i===0?' active':''}" onclick="galleryGo(${i})"></button>`).join('');
  const multi=images.length>1;
  prev.style.display=next.style.display=multi?'flex':'none';
  updateGalleryPos();
}
function updateGalleryPos(){
  document.getElementById('gallery-track').style.transform=`translateX(-${galleryIndex*100}%)`;
  document.querySelectorAll('.gallery-dot').forEach((d,i)=>d.classList.toggle('active',i===galleryIndex));
}
function galleryMove(dir){const s=document.getElementById('gallery-track').children.length;galleryIndex=(galleryIndex+dir+s)%s;updateGalleryPos();}
function galleryGo(i){galleryIndex=i;updateGalleryPos();}

// ═══════════════════════════════════════
// PRODUCT MODAL
// ═══════════════════════════════════════
function openProductModal(id){
  const p = adminProds.find(x=>x.id===id);
  if(!p) return;
  currentModalProdId = id;
  buildGallery(p.images, "Skinory");
  document.getElementById('modal-name').textContent=p.name;
  document.getElementById('modal-size').textContent=p.size;
  const ep=effectivePrice(p);
  document.getElementById('modal-price').textContent='৳'+ep.toLocaleString();
  const origEl=document.getElementById('modal-orig-price');
  const discEl=document.getElementById('modal-discount');
  if(p.salePrice){
    origEl.textContent='৳'+p.price.toLocaleString(); origEl.style.display='block';
    const pct=Math.round((1-p.salePrice/p.price)*100);
    discEl.textContent=pct+'% OFF'; discEl.style.display='block';
  } else { origEl.style.display='none'; discEl.style.display='none'; }
  document.getElementById('modal-stars').textContent='★'.repeat(Math.floor(p.rating))+' '+p.rating+'/5';
  const prodReviews=reviews[p.id]||[];
  document.getElementById('modal-review-count').textContent=prodReviews.length+' customer review'+(prodReviews.length!==1?'s':'');
  document.getElementById('modal-sales').textContent=p.sales+' purchases';
  document.getElementById('tab-desc').textContent=p.description;
  document.getElementById('tab-how').textContent=p.howToUse;
  document.getElementById('tab-ing').textContent=p.ingredients;
  const skinLabels={dry:'Dry Skin',oily:'Oily Skin',combination:'Combination',sensitive:'Sensitive','all-skin':'All Types'};
  document.getElementById('modal-skin').innerHTML=p.skinType.map(s=>`<span class="skin-tag">${skinLabels[s]||s}</span>`).join('');
  document.getElementById('modal-stock-info').innerHTML=`<div style="display:flex;align-items:center;gap:8px;"><div style="width:8px;height:8px;border-radius:50%;background:${p.stock>5?'#22c55e':'#f59e0b'}"></div><span style="font-size:12px;color:var(--text-s)">${p.stock>5?'In Stock':'Low Stock — '+p.stock+' left'}</span></div>`;
  renderReviews(id);
  renderRelated(id);
  // reset
  modalQty=1; document.getElementById('modal-qty').textContent='1';
  document.querySelectorAll('.modal-tab').forEach((t,i)=>t.classList.toggle('active',i===0));
  document.querySelectorAll('.tab-content').forEach((c,i)=>c.classList.toggle('active',i===0));
  document.getElementById('modal-cart-btn').onclick=()=>{addToCart(id,modalQty);closeModal('product-modal');showToast('Added to cart!');};
  document.getElementById('modal-buy-btn').onclick=()=>{addToCart(id,modalQty);closeModal('product-modal');openCart();};
  document.getElementById('product-modal').style.display='flex';
  document.body.style.overflow='hidden';
}

function switchTab(id,btn){
  document.querySelectorAll('.modal-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-'+id).classList.add('active');
}

function changeModalQty(d){ modalQty=Math.max(1,modalQty+d); document.getElementById('modal-qty').textContent=modalQty; }

function closeModal(id){ document.getElementById(id).style.display='none'; document.body.style.overflow=''; }
function closeProductModal(e){ if(e.target===e.currentTarget) closeModal(e.currentTarget.id); }

// ═══════════════════════════════════════
// REVIEWS
// ═══════════════════════════════════════
function renderReviews(id){
  const prodReviews=reviews[id]||[];
  const list=document.getElementById('reviews-list');
  document.getElementById('reviews-title').textContent=`Customer Reviews (${prodReviews.length})`;
  if(!prodReviews.length){
    list.innerHTML='<p style="font-size:13px;color:var(--text-s);margin-bottom:14px;">No reviews yet — be the first!</p>';
    return;
  }
  list.innerHTML=prodReviews.map(r=>`
    <div class="review-item">
      <div class="review-header"><span class="review-author">${r.name}</span><span class="review-date">${r.date}</span></div>
      <div class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</div>
      <div class="review-text">${r.text}</div>
    </div>`).join('');
}

function setReviewStar(n){
  reviewStars=n;
  document.querySelectorAll('#star-picker span').forEach((s,i)=>s.classList.toggle('lit',i<n));
}

function submitReview(){
  const name=document.getElementById('rev-name').value.trim();
  const text=document.getElementById('rev-text').value.trim();
  if(!name||!text){showToast('Please fill in your name and review');return;}
  if(!reviews[currentModalProdId]) reviews[currentModalProdId]=[];
  reviews[currentModalProdId].unshift({name,text,stars:reviewStars,date:new Date().toLocaleDateString('en-BD')});
  localStorage.setItem('skinory_reviews',JSON.stringify(reviews));
  document.getElementById('rev-name').value='';
  document.getElementById('rev-text').value='';
  reviewStars=5;
  document.querySelectorAll('#star-picker span').forEach(s=>s.classList.remove('lit'));
  renderReviews(currentModalProdId);
  renderBestSellers();
  if(document.getElementById('products-page').classList.contains('active')) applyFilters();
  showToast('Review submitted!');
}

// ═══════════════════════════════════════
// RELATED PRODUCTS
// ═══════════════════════════════════════
function renderRelated(id){
  const p=adminProds.find(x=>x.id===id);
  if(!p) return;
  const related=adminProds.filter(x=>x.id!==id&&(x.category===p.category||(x.skinType&&p.skinType&&x.skinType.some(s=>p.skinType.includes(s))))).slice(0,5);
  document.getElementById('related-row').innerHTML=related.map(r=>{
    const img=r.images&&r.images.length?r.images[0]:null;
    const imgInner=img?`<img src="${img}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" onerror="this.style.display='none'">`:`Skinory`;
    return `<div class="related-card" onclick="closeModal('product-modal');setTimeout(()=>openProductModal(${r.id}),50)">
      <div class="related-img">${imgInner}</div>
      <div class="related-name">${r.name}</div>
      <div class="related-price">৳${effectivePrice(r).toLocaleString()}</div>
    </div>`;
  }).join('');
}

// ═══════════════════════════════════════
// CART
// ═══════════════════════════════════════
function addToCart(id,qty=1){ const item=cart.find(c=>c.id===id); item?item.qty+=qty:cart.push({id,qty}); saveCart(); }
function quickAddToCart(e,id){ e.stopPropagation(); addToCart(id); showToast('Added to cart!'); }
function quickBuyNow(e,id){ e.stopPropagation(); addToCart(id); openCart(); }
function saveCart(){ localStorage.setItem('skinory_cart',JSON.stringify(cart)); updateCartCount(); }
function updateCartCount(){ document.getElementById('cart-count').textContent=cart.reduce((s,c)=>s+c.qty,0); }

function openCart(){ renderCart(); document.getElementById('cart-panel').classList.add('open'); document.getElementById('cart-backdrop').classList.add('open'); document.body.style.overflow='hidden'; }
function closeCart(){ document.getElementById('cart-panel').classList.remove('open'); document.getElementById('cart-backdrop').classList.remove('open'); document.body.style.overflow=''; }

function renderCart(){
  const items=document.getElementById('cart-items');
  if(!cart.length){
    items.innerHTML='<div class="cart-empty"><div class="cart-empty-icon">Cart Empty</div><p>Your cart is currently empty</p></div>';
    document.getElementById('cart-footer').style.display='none'; return;
  }
  let sub=0;
  items.innerHTML=cart.map(c=>{
    const p=adminProds.find(x=>x.id===c.id); if(!p) return '';
    const ep=effectivePrice(p); sub+=ep*c.qty;
    const img=p.images&&p.images.length?p.images[0]:null;
    return `<div class="cart-item">
      <div class="cart-item-icon">${img?`<img src="${img}" alt="">`:'<span>Skinory</span>'}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-size">${p.size}</div>
        <div class="cart-item-price">৳${(ep*c.qty).toLocaleString()}</div>
        <div class="qty-ctrl">
          <button class="qty-btn" onclick="changeQty(${p.id},-1)">−</button>
          <span class="qty-num">${c.qty}</span>
          <button class="qty-btn" onclick="changeQty(${p.id},1)">+</button>
        </div>
      </div>
      <button class="cart-remove" onclick="removeFromCart(${p.id})">×</button>
    </div>`;
  }).join('');

  const toFree = FREE_DELIVERY_THRESHOLD - sub;
  const fdBar = document.getElementById('free-delivery-bar');
  const fdMsg = document.getElementById('free-delivery-msg');
  const fdFill = document.getElementById('free-delivery-fill');
  if(toFree > 0){
    fdMsg.textContent = `Add ৳${toFree.toLocaleString()} more for free delivery!`;
    fdFill.style.width = Math.min(100,(sub/FREE_DELIVERY_THRESHOLD)*100)+'%';
  } else {
    fdMsg.textContent = 'You\'ve unlocked FREE delivery!';
    fdFill.style.width = '100%';
  }

  const delivery = sub >= FREE_DELIVERY_THRESHOLD ? 0 : 80;
  document.getElementById('cart-delivery-text').textContent = delivery===0 ? 'FREE ✓' : '৳80';
  document.getElementById('cart-sub').textContent='৳'+sub.toLocaleString();

  let discountAmt=0;
  const discRow=document.getElementById('cart-discount-row');
  if(activeCoupon){
    discountAmt=Math.round(sub*activeCoupon.pct/100);
    discRow.style.display='flex';
    document.getElementById('cart-discount-label').textContent=`Discount (${activeCoupon.code})`;
    document.getElementById('cart-discount-val').textContent='-৳'+discountAmt.toLocaleString();
  } else { discRow.style.display='none'; }

  document.getElementById('cart-total-price').textContent='৳'+(sub+delivery-discountAmt).toLocaleString();
  document.getElementById('cart-footer').style.display='block';
}

function changeQty(id,d){ const item=cart.find(c=>c.id===id); if(!item) return; item.qty+=d; if(item.qty<=0) cart=cart.filter(c=>c.id!==id); saveCart(); renderCart(); }
function removeFromCart(id){ cart=cart.filter(c=>c.id!==id); saveCart(); renderCart(); }

// ═══════════════════════════════════════
// COUPON
// ═══════════════════════════════════════
function applyCoupon(){
  const code=document.getElementById('coupon-input').value.trim().toUpperCase();
  const coupon=coupons.find(c=>c.code===code);
  const successEl=document.getElementById('coupon-success');
  if(coupon){
    activeCoupon=coupon;
    successEl.textContent=`✓ ${coupon.pct}% discount applied!`;
    successEl.style.display='block';
    showToast(`Coupon applied — ${coupon.pct}% off!`);
    renderCart();
  } else {
    successEl.textContent=''; successEl.style.display='none';
    activeCoupon=null;
    showToast('Invalid coupon code');
  }
}

// ═══════════════════════════════════════
// CHECKOUT
// ═══════════════════════════════════════
function openCheckout(){
  let sub=cart.reduce((s,c)=>{const p=adminProds.find(x=>x.id===c.id);return s+(p?effectivePrice(p)*c.qty:0);},0);
  const delivery=sub>=FREE_DELIVERY_THRESHOLD?0:80;
  const discount=activeCoupon?Math.round(sub*activeCoupon.pct/100):0;
  const total=sub+delivery-discount;
  const items=cart.map(c=>{const p=adminProds.find(x=>x.id===c.id);return p?`<div class="order-item-row"><span>${p.name} ×${c.qty}</span><span>৳${(effectivePrice(p)*c.qty).toLocaleString()}</span></div>`:''}).join('');
  document.getElementById('checkout-summary').innerHTML=items
    +(discount?`<div class="order-item-row" style="color:var(--rose-d);"><span>Discount</span><span>-৳${discount.toLocaleString()}</span></div>`:'')
    +`<div class="order-item-row"><span>Delivery</span><span>${delivery===0?'FREE':'৳80'}</span></div>`
    +`<div class="order-total-row"><span>Total</span><span>৳${total.toLocaleString()}</span></div>`;
  closeCart();
  document.getElementById('checkout-modal').style.display='flex';
  document.body.style.overflow='hidden';
}

function selectPayment(el,method){ document.querySelectorAll('.pay-opt').forEach(e=>e.classList.remove('selected')); el.classList.add('selected'); selectedPayment=method; }

function isValidBDPhone(p){ return /^01[3-9]\d{8}$/.test(p.replace(/\s/g,'')); }

function placeOrder(){
  const name=document.getElementById('c-name').value.trim();
  const phone=document.getElementById('c-phone').value.trim();
  const address=document.getElementById('c-address').value.trim();
  if(!name||!phone||!address){showToast('Please fill all required fields');return;}
  if(!isValidBDPhone(phone)){showToast('Enter a valid BD number (e.g. 01XXXXXXXXX)');document.getElementById('c-phone').focus();return;}
  const sub=cart.reduce((s,c)=>{const p=adminProds.find(x=>x.id===c.id);return s+(p?effectivePrice(p)*c.qty:0);},0);
  const delivery=sub>=FREE_DELIVERY_THRESHOLD?0:80;
  const discount=activeCoupon?Math.round(sub*activeCoupon.pct/100):0;
  const orderId='SKN-'+Date.now().toString().slice(-6);
  const order={
    id:orderId,name,phone,address,
    district:document.getElementById('c-district').value,
    note:document.getElementById('c-note').value,
    payment:selectedPayment,
    coupon:activeCoupon?activeCoupon.code:'',
    items:cart.map(c=>{const p=adminProds.find(x=>x.id===c.id);return{name:p.name,size:p.size,qty:c.qty,price:effectivePrice(p)};}),
    total:sub+delivery-discount,
    date:new Date().toLocaleDateString('en-BD'),
    status:'Pending'
  };
  orders.unshift(order);
  localStorage.setItem('skinory_orders',JSON.stringify(orders));
  cart=[]; activeCoupon=null; saveCart();
  closeModal('checkout-modal');
  document.getElementById('order-id-display').textContent='Order ID: '+orderId;
  document.getElementById('order-success').style.display='flex';
  document.body.style.overflow='hidden';
}

// ═══════════════════════════════════════
// ORDER TRACKING
// ═══════════════════════════════════════
function trackOrder(){
  const id=document.getElementById('track-id').value.trim().toUpperCase();
  const phone=document.getElementById('track-phone').value.trim();
  const result=document.getElementById('track-result');
  if(!id||!phone){showToast('Enter your Order ID and phone number');return;}
  const o=orders.find(x=>x.id===id&&x.phone===phone);
  if(!o){result.style.display='none';showToast('Order not found. Check your ID and phone.');return;}
  document.getElementById('tr-id').textContent=o.id;
  document.getElementById('tr-status').innerHTML=`<span class="status-pill status-${o.status||'Pending'}">${o.status||'Pending'}</span>`;
  document.getElementById('tr-name').textContent=o.name;
  document.getElementById('tr-phone').textContent=o.phone;
  document.getElementById('tr-district').textContent=o.district;
  document.getElementById('tr-payment').textContent=o.payment.toUpperCase();
  document.getElementById('tr-total').textContent='৳'+o.total.toLocaleString();
  document.getElementById('tr-date').textContent=o.date;
  document.getElementById('tr-items').innerHTML=o.items.map(i=>`<div>• ${i.name} × ${i.qty} — ৳${(i.price*i.qty).toLocaleString()}</div>`).join('');
  result.style.display='block';
}

// ═══════════════════════════════════════
// ADMIN
// ═══════════════════════════════════════
function openAdminLogin(){
  document.getElementById('login-user').value='';
  document.getElementById('login-pass').value='';
  document.getElementById('login-error').style.display='none';
  document.getElementById('admin-login-modal').style.display='flex';
  document.body.style.overflow='hidden';
  setTimeout(()=>document.getElementById('login-user').focus(),100);
}

function doLogin(){
  const u=document.getElementById('login-user').value.trim();
  const p=document.getElementById('login-pass').value;
  if(u===ADMIN_USER&&p===ADMIN_PASS){closeModal('admin-login-modal');navigate('admin');}
  else{document.getElementById('login-error').style.display='block';document.getElementById('login-pass').value='';document.getElementById('login-pass').focus();}
}

function adminLogout(){ navigate('home'); showToast('Logged out'); }

function renderAdmin(){
  const totalSales=orders.reduce((s,o)=>s+o.total,0);
  const topProd=[...adminProds].sort((a,b)=>b.sales-a.sales)[0];
  const lowStock=adminProds.filter(p=>p.stock<=5);
  document.getElementById('admin-stats').innerHTML=`
    ${lowStock.length?`<div class="low-stock-banner"><strong>Low Stock Alert</strong><span>${lowStock.map(p=>`${p.name} (${p.stock} left)`).join(' · ')}</span></div>`:''}
    <div class="stat-card"><div class="stat-num">${adminProds.length}</div><div class="stat-label">Total Products</div></div>
    <div class="stat-card"><div class="stat-num">${orders.length}</div><div class="stat-label">Total Orders</div></div>
    <div class="stat-card"><div class="stat-num">৳${totalSales.toLocaleString()}</div><div class="stat-label">Total Revenue</div></div>
    <div class="stat-card"><div class="stat-num">${topProd?topProd.name.split(' ')[0]:'—'}</div><div class="stat-label">Top Seller${topProd?' — '+topProd.sales+' sold':''}</div></div>`;
  document.getElementById('admin-table').innerHTML=`
    <thead><tr><th>Img</th><th>Name</th><th>Size</th><th>Price</th><th>Sale</th><th>Stock</th><th>New?</th><th>Actions</th></tr></thead>
    <tbody>${adminProds.map(p=>`<tr>
      <td><div style="width:40px;height:40px;border-radius:8px;overflow:hidden;background:var(--rose-l);display:flex;align-items:center;justify-content:center;">
        ${p.images&&p.images.length?`<img src="${p.images[0]}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'">`:'<span style="font-family:Playfair Display,serif;font-size:8px;color:var(--rose-d);">SKINORY</span>'}
      </div></td>
      <td>${p.name}</td><td>${p.size}</td>
      <td>৳${p.price.toLocaleString()}</td>
      <td>${p.salePrice?'৳'+p.salePrice.toLocaleString():'—'}</td>
      <td style="color:${p.stock<=5?'#A05965':'#3D1A1F'};font-weight:700;">${p.stock}</td>
      <td>${p.isNew?'<span style="color:var(--text-m);font-weight:700;">YES</span>':'No'}</td>
      <td><button class="btn-edit" onclick="openEditProduct(${p.id})">Edit</button>
          <button class="btn-delete" onclick="deleteProduct(${p.id})">Delete</button></td>
    </tr>`).join('')}</tbody>`;
  document.getElementById('orders-table').innerHTML=!orders.length
    ?'<tr><td colspan="8" style="text-align:center;padding:32px;color:var(--text-s);">No orders yet</td></tr>'
    :`<thead><tr><th>ID</th><th>Name</th><th>Phone</th><th>District</th><th>Payment</th><th>Coupon</th><th>Total</th><th>Status</th></tr></thead>
     <tbody>${orders.map(o=>`<tr>
       <td style="font-weight:700;color:var(--rose);">${o.id}</td>
       <td>${o.name}</td><td>${o.phone}</td><td>${o.district}</td>
       <td style="text-transform:uppercase;font-size:11px;">${o.payment}</td>
       <td style="font-size:11px;color:var(--rose);font-weight:700;">${o.coupon||'—'}</td>
       <td style="font-weight:700;">৳${o.total.toLocaleString()}</td>
       <td><span class="status-pill status-${o.status||'Pending'}">${o.status||'Pending'}</span>
           <button class="btn-status" style="display:block;margin-top:4px;" onclick="cycleStatus('${o.id}')">Update</button></td>
     </tr>`).join('')}</tbody>`;
  renderCouponList();
}

function switchAdminTab(tab,btn){
  document.querySelectorAll('.admin-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.admin-panel').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('admin-'+tab).classList.add('active');
}

function openEditProduct(id){
  const p=adminProds.find(x=>x.id===id); if(!p) return;
  document.getElementById('edit-id').value=p.id;
  document.getElementById('edit-name').value=p.name;
  document.getElementById('edit-size').value=p.size;
  document.getElementById('edit-price').value=p.price;
  document.getElementById('edit-sale').value=p.salePrice||'';
  document.getElementById('edit-stock').value=p.stock;
  document.getElementById('edit-rating').value=p.rating;
  document.getElementById('edit-cat').value=p.category;
  document.getElementById('edit-new').value=p.isNew?'1':'0';
  document.getElementById('edit-desc').value=p.description;
  document.getElementById('edit-how').value=p.howToUse;
  document.getElementById('edit-modal').style.display='flex';
  document.body.style.overflow='hidden';
}

function saveEditProduct(){
  const id=document.getElementById('edit-id').value;
  const p=adminProds.find(x=>String(x.id)===String(id)); if(!p) return;
  p.name=document.getElementById('edit-name').value.trim()||p.name;
  p.size=document.getElementById('edit-size').value.trim()||p.size;
  p.price=parseInt(document.getElementById('edit-price').value)||p.price;
  const sp=parseInt(document.getElementById('edit-sale').value);
  p.salePrice=sp>0?sp:null;
  p.stock=parseInt(document.getElementById('edit-stock').value)??p.stock;
  p.rating=parseFloat(document.getElementById('edit-rating').value)||p.rating;
  p.category=document.getElementById('edit-cat').value;
  p.isNew=document.getElementById('edit-new').value==='1';
  p.description=document.getElementById('edit-desc').value||p.description;
  p.howToUse=document.getElementById('edit-how').value||p.howToUse;
  localStorage.setItem('skinory_prods',JSON.stringify(adminProds));
  closeModal('edit-modal'); renderAdmin(); renderBestSellers(); showToast('Product updated!');
}

function deleteProduct(id){
  if(!confirm('Delete this product?')) return;
  adminProds=adminProds.filter(p=>p.id!==id);
  localStorage.setItem('skinory_prods',JSON.stringify(adminProds));
  renderAdmin(); showToast('Product deleted');
}

const STATUS_CYCLE=['Pending','Processing','Shipped','Delivered'];
function cycleStatus(id){
  const o=orders.find(x=>x.id===id); if(!o) return;
  const idx=STATUS_CYCLE.indexOf(o.status||'Pending');
  o.status=STATUS_CYCLE[(idx+1)%STATUS_CYCLE.length];
  localStorage.setItem('skinory_orders',JSON.stringify(orders));
  renderAdmin(); showToast('Status → '+o.status);
}

// ═══════════════════════════════════════
// IMAGE UPLOAD
// ═══════════════════════════════════════
function addImageUrl(){ const url=document.getElementById('a-img-url').value.trim(); if(!url) return; pendingImages.push(url); document.getElementById('a-img-url').value=''; renderPendingImgs(); }
function handleImgFiles(input){ Array.from(input.files).forEach(f=>{const r=new FileReader();r.onload=e=>{pendingImages.push(e.target.result);renderPendingImgs();};r.readAsDataURL(f);}); input.value=''; }
function renderPendingImgs(){ document.getElementById('a-img-preview').innerHTML=pendingImages.map((src,i)=>`<div class="img-thumb"><img src="${src}" alt=""/><button class="img-thumb-del" onclick="removePendingImg(${i})">×</button></div>`).join(''); }
function removePendingImg(i){ pendingImages.splice(i,1); renderPendingImgs(); }

function addProduct(){
  const name=document.getElementById('a-name').value.trim();
  const size=document.getElementById('a-size').value.trim();
  const price=parseInt(document.getElementById('a-price').value);
  if(!name||!size||!price){showToast('Please fill required fields');return;}
  const sp=parseInt(document.getElementById('a-sale').value);
  adminProds.push({
    id:Date.now(),name,size,price,salePrice:sp>0?sp:null,
    category:document.getElementById('a-cat').value,
    skinType:[document.getElementById('a-skin').value],
    concerns:[],
    stock:parseInt(document.getElementById('a-stock').value)||20,
    images:[...pendingImages],
    rating:parseFloat(document.getElementById('a-rating').value)||4.5,
    isNew:document.getElementById('a-new').value==='1',
    sales:0,
    description:document.getElementById('a-desc').value||'A quality CeraVe skincare product.',
    howToUse:document.getElementById('a-how').value||'Apply to cleansed skin as needed.',
    ingredients:'Ceramide NP, Ceramide AP, Ceramide EOP, Hyaluronic Acid, Niacinamide.'
  });
  localStorage.setItem('skinory_prods',JSON.stringify(adminProds));
  pendingImages=[]; renderPendingImgs();
  showToast('Product added!');
  renderAdmin();
  switchAdminTab('products',document.querySelectorAll('.admin-tab')[0]);
}

// ═══════════════════════════════════════
// COUPONS ADMIN
// ═══════════════════════════════════════
function addCoupon(){
  const code=document.getElementById('coup-code').value.trim().toUpperCase();
  const pct=parseInt(document.getElementById('coup-pct').value);
  if(!code||!pct||pct<1||pct>100){showToast('Enter a valid code and % discount');return;}
  if(coupons.find(c=>c.code===code)){showToast('Coupon code already exists');return;}
  coupons.push({code,pct});
  localStorage.setItem('skinory_coupons',JSON.stringify(coupons));
  document.getElementById('coup-code').value='';
  document.getElementById('coup-pct').value='';
  renderCouponList(); showToast('Coupon added!');
}

function deleteCoupon(code){
  coupons=coupons.filter(c=>c.code!==code);
  localStorage.setItem('skinory_coupons',JSON.stringify(coupons));
  if(activeCoupon&&activeCoupon.code===code) activeCoupon=null;
  renderCouponList(); showToast('Coupon deleted');
}

function renderCouponList(){
  document.getElementById('coupon-list').innerHTML=coupons.length
    ?`<table class="admin-table"><thead><tr><th>Code</th><th>Discount</th><th></th></tr></thead><tbody>${coupons.map(c=>`<tr><td style="font-weight:700;color:var(--rose);">${c.code}</td><td>${c.pct}% off</td><td><button class="btn-delete" onclick="deleteCoupon('${c.code}')">Delete</button></td></tr>`).join('')}</tbody></table>`
    :'<p style="font-size:13px;color:var(--text-s);">No coupon codes yet.</p>';
}

// ═══════════════════════════════════════
// EXPORT CSV
// ═══════════════════════════════════════
function exportCSV(){
  if(!orders.length){showToast('No orders to export');return;}
  const headers=['Order ID','Name','Phone','Address','District','Payment','Coupon','Total','Date','Status','Items'];
  const rows=orders.map(o=>[o.id,o.name,o.phone,`"${o.address}"`,o.district,o.payment,o.coupon||'',o.total,o.date,o.status,`"${o.items.map(i=>i.name+' x'+i.qty).join(', ')}"`]);
  const csv=[headers,...rows].map(r=>r.join(',')).join('\n');
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));
  a.download='skinory_orders_'+new Date().toISOString().slice(0,10)+'.csv';
  a.click(); showToast('CSV exported!');
}

// ═══════════════════════════════════════
// TOAST
// ═══════════════════════════════════════
let toastTimer;
function showToast(msg){ const t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show'); clearTimeout(toastTimer); toastTimer=setTimeout(()=>t.classList.remove('show'),2500); }

// ═══════════════════════════════════════
// CONCERN PILLS UI
// ═══════════════════════════════════════
function filterByConcern(concern){
  document.querySelectorAll('.concern-pill').forEach(p=>p.classList.remove('active'));
  event.currentTarget.classList.add('active');
  navigate('products');
  setTimeout(()=>{ document.getElementById('filter-concern').value=concern; applyFilters(); },50);
}

// ═══════════════════════════════════════
// INIT
// ═══════════════════════════════════════
updateCartCount();
renderBestSellers();
// init star picker
document.querySelectorAll('#star-picker span').forEach(s=>s.classList.add('lit'));