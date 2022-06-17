var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '000512345'
});
connection.connect()
connection.query('use fooddx',(error,row,func)=>{
    var initialPositions =[
        // pizza
        {
            name:'"Margherita Pizza in a Skillet"',
            nutrition:'"1805"',
            description:'"Skillet Margherita pizza recipe loaded with melted fresh mozzarella, ripe tomatoes, and herbaceous basil leaves. Baking in a cast iron pan at very high temperature ensures a crispy golden crust."',
            price:15,
            type:'"pizza"',
            ingrediends:'"1 tablespoon olive oil, plus more for brushing 1 pound pizza dough, store-bought or homemade 1/2 cup tomato sauce, or pizza sauce 4 ounces fresh mozzarella cheese, cut into 8 slices 2 ripe tomatoes, cocktail, Campari or Roma, about ten 1/8-inch thick slices 10 fresh basil leaves kosher salt, as needed for seasoning black pepper, as needed for seasoning"',
            picture:'"https://www.jessicagavin.com/wp-content/uploads/2019/08/skillet-margherita-pizza-12-600x900.jpg"'
    
        },
        {
            name:'"Bacon Breakfast Pizza"',
            nutrition:'"1567"',
            description:'"Your mornings just got better. It’s the easiest pizza for breakfast! Loaded with crisp bacon bits, eggs and mozzarella cheese. It’s breakfast at its best!"',
            price:20,
            type:'"pizza"',
            ingrediends:'"8 bacon slices, cut into 1 1/2 inch pieces 1 1/2 tablespoons cornmeal 1 (13.8-ounce can) refrigerated classic pizza crust 1 1/2 tablespoons olive oil 2 cloves garlic, minced 1 (8-ounce) package Stella® Fresh Mozzarella Cheese, thinly sliced 3 green onions, thinly sliced 3 large eggs Kosher salt and freshly ground black pepper 2 tablespoons chopped fresh parsley leaves 1/4 teaspoon crushed red pepper flakes"',
            picture:'"https://s23209.pcdn.co/wp-content/uploads/2018/03/Bacon-Breakfast-PizzaIMG_3556-copy.jpg"'
    
        },
        {
            name:'"Pepperoni Pizza"',
            nutrition:'"1645"',
            description:'"Such an incredibly delicious pepperoni pizza recipe! You get a homemade crust, homemade sauce and layers of flavorful toppings."',
            price:23,
            type:'"pizza"',
            ingrediends:'"2 1/4 tsp active dry yeast 2 tsp granulated sugar 1 1/2 cups warm water , 110 degrees, divided 3 Tbsp olive oil , plus more for brushing 1 1/2 tsp salt 1 tsp white vinegar 3 1/2 - 4 cups bread flour"',
            picture:'"https://www.cookingclassy.com/wp-content/uploads/2014/07/pepperoni-pizza5-edit+text.1.jpg"'
    
        },
        {
            name:'"BBQ Chicken Pizza"',
            nutrition:'"1834"',
            description:'"No other restaurant pizza compares to this easy homemade BBQ Chicken Pizza made with bbq sauce, mozzarella, chicken, red onions and cilantro on perfect homemade pizza crust."',
            price:13,
            type:'"pizza"',
            ingrediends:'"Dough for one large pizza 1 1/2 cups cooked chicken , shredded rotisserie or about 2 chicken breasts 2 cups shredded mozzarella cheese 1/2 cup barbecue sauce 1/4 large red onion very thinly sliced fresh cilantro to taste"',
            picture:'"https://tastesbetterfromscratch.com/wp-content/uploads/2013/03/BBQ-Chicken-Pizza-11.jpg"'
    
        },
        {
            name:'"Roasted Chicken White Pizza"',
            nutrition:'"1345"',
            description:'"So amazingly cheesy with just the right amount of garlic. You can save the leftover garlic for later use!"',
            price:17,
            type:'"pizza"',
            ingrediends:'"3 tablespoons olive oil, divided 8 ounces boneless, skinless chicken breasts Kosher salt and freshly ground black pepper, to taste 4 cups chopped spinach Pinch of crushed red pepper flakes, optional 1 cup ricotta cheese 1/2 teaspoon dried thyme 1/4 teaspoon dried oregano 1/4 teaspoon dried basil 1/4 cup yellow cornmeal 1 (13.8-ounce can) refrigerated classic pizza crust 8 (1-ounce slices) fresh mozzarella cheese"',
            picture:'"https://s23209.pcdn.co/wp-content/uploads/2017/05/Roasted-Garlic-Chicken-and-Spinach-White-PizzaIMG_0041edit.jpg"'
    
        },
        {
            name:'"Chicken Pesto Pizza"',
            nutrition:'"1458"',
            description:'"The absolute perfect weeknight meal that comes together in minutes! Use leftover rotisserie chicken, fresh tomatoes, pesto and cheese!"',
            price:14,
            type:'"pizza"',
            ingrediends:'"1/4 cup yellow cornmeal 1 (13.8-ounce can) refrigerated classic pizza crust 1/4 cup pesto, homemade or store-bought 8 (1-ounce slices) fresh mozzarella cheese 1 cup ricotta cheese 1 cup leftover rotisserie chicken 1 cup cherry tomatoes, halved"',
            picture:'"https://s23209.pcdn.co/wp-content/uploads/2017/01/Chicken-Pesto-PizzaIMG_6175.jpg"'
    
        },
        {
            name:'"Thai Sweet Chili Pork Pizza"',
            nutrition:'"1945"',
            description:'"Sweet and spicy pizza with a quick and incredibly yummy homemade Thai chili sauce and juicy pork! This pizza is AMAZING!!! "',
            price:14,
            type:'"pizza"',
            ingrediends:'"1 homemade or store-bought pizza crust 1 cup sweet chili sauce - (see recipe below) 2 cups shredded mozzarella cheese 2 cups shredded pork - (use leftover pork or use slow cooker recipe below)  cup cilantro leaves - roughly chopped 1 teaspoons crushed red chili flakes 4 teaspoons minced garlic  cup white vinegar  cup sugar 1 teaspoon salt  cup water - + 2 tablespoons, divided 1 tablespoon corn starch 1 pound pork roast 1 teaspoon salt 1 teaspoon onion powder 1 teaspoon crushed red pepper flakes 1 cup water"',
            picture:'"https://www.lecremedelacrumb.com/wp-content/uploads/2014/08/thai-sweet-chili-pork-pizza-8.jpg"'
    
        },
        {
            name:'"Hawaiian Pizza"',
            nutrition:'"1765"',
            description:'"Classic Hawaiian Pizza combines pizza sauce, cheese, cooked ham, and pineapple. This crowd-pleasing pizza recipe starts with my homemade pizza crust and is finished with a sprinkle of crispy bacon. It’s salty, sweet, cheesy, and undeniably delicious!"',
            price:14,
            type:'"pizza"',
            ingrediends:'"1/2 recipe homemade pizza crust 1/2 cup (127g) pizza sauce (homemade or store-bought) 1 and 1/2 cups (6oz or 168g) shredded mozzarella cheese 1/2 cup (75g) cooked ham or Canadian bacon, sliced or chopped 1/2 cup (82g) pineapple chunks (canned or fresh) 3 slices bacon, cooked and crumbled"',
            picture:'"https://sallysbakingaddiction.com/wp-content/uploads/2014/08/It-doesnt-get-much-better-than-Homemade-Hawaiian-Pizza.-Tropical-paradise-for-dinner-2.jpg"'
    
        },
        {
            name:'"Shrimp Scampi Pizza"',
            nutrition:'"1324"',
            description:'"A quick, easy and divinely tasty shrimp pizza in a garlic butter sauce!"',
            price:14,
            type:'"pizza"',
            ingrediends:'"4 tablespoons butter 6 cloves garlic, chopped 1 pinch red pepper flakes (optional) 1 pound shrimp, shelled and de-veined 2 tablespoons lemon juice 1 pizza dough 1 cup mozzarella, shredded 1/4 cup parmigiano reggiano (parmesan), grated"',
            picture:'"https://www.closetcooking.com/wp-content/uploads/2008/06/Shrimp-Scampi-Pizza-1200-3859.jpg"'
    
        },
        // salads
        {
            name:'"Grilled Chicken Salad"',
            nutrition:'"657"',
            description:'"This grilled chicken salad is tender marinated chicken that’s grilled to perfection then served over lettuce with bacon, avocado, corn, blue cheese and tomatoes. A hearty salad that’s packed with flavor and also happens to be full of nutrition."',
            price:9,
            type:'"salad"',
            ingrediends:'"1 pound boneless skinless chicken breasts 6 cups romaine lettuce coarsely chopped 3/4 cup cherry tomatoes halved 3/4 cup corn kernels fresh, thawed from frozen or canned 3/4 cup cucumber chopped 1/4 cup red onion thinly sliced 1/2 cup cooked crumbled bacon 1/2 cup blue cheese crumbled 1 avocado peeled, pitted and sliced"',
            picture:'"https://www.dinneratthezoo.com/wp-content/uploads/2020/12/grilled-chicken-salad-4.jpg"'
    
        },
        {
            name:'"Crispy Chicken Salad"',
            nutrition:'"764"',
            description:'"A crispy chicken salad thats drizzled with sriracha honey bbq dressing! The chicken tenders are perfectly juicy and tender on the inside with that crispy panko crust on the outside. You’ll love this easy crispy chicken salad!"',
            price:15,
            type:'"salad"',
            ingrediends:'" ¼ cup EACH: honey AND bbq sauce  2 tablespoons EACH: dijon mustard AND apple cider vinegar   cup mayonnaise 1 - 3 teaspoons sriracha (or more to taste) 1 cup buttermilk 1  pound boneless chicken tenders (or breasts)  cup all-purpose flour (or whole wheat) 1 teaspoon EACH: garlic powder AND smoked paprika  cup grated parmesan cheese 2 eggs, whisked 1  cups panko breadcrumbs Peanut or canola oil, for frying 1 cup cherry tomatoes  cup EACH: toasted sliced almonds AND sliced red onions 10-ounce romaine, chopped into small pieces 2 avocados, sliced"',
            picture:'"https://littlespicejar.com/wp-content/uploads/2018/07/Crispy-Chicken-Salad-with-BBQ-Honey-Mustard-Dressing-2.jpg"'
    
        },
        {
            name:'"Cranberry Chicken Salad"',
            nutrition:'"734"',
            description:'"This cranberry chicken salad is an easy and delicious recipe made with shredded chicken, dried cranberries, toasted pecans, and crunchy celery all wrapped up in a cream dressing. It’s perfect for meal-prep lunches or a quick snack!"',
            price:11,
            type:'"salad"',
            ingrediends:'"2 chicken breasts, or 3 cups cooked shredded chicken 2 stalks celery, minced 1 cup chopped green onions 1 cup EACH: mayonnaise, dried cranberries, toasted pecans 1 teaspoon EACH: sea salt and pepper"',
            picture:'"https://www.theendlessmeal.com/wp-content/uploads/2020/11/Cranberry-Chicken-Salad-6-scaled.jpg"'
    
        },
        {
            name:'"Big, Quick Chicken Salad"',
            nutrition:'"634"',
            description:'"Here’s a big, speedy chicken salad to serve as a main course. Quick to put together using a store bought rotisserie chicken, all my favourite vegetables, a sprinkle of bacon, all tossed in a herby garlicky salad dressing."',
            price:13,
            type:'"salad"',
            ingrediends:'"3 cups store bought roast chicken , shredded (Note 1) 12 cups cos / romaine lettuce (2 medium, 1 giant) , chopped into bite size pieces (or other leafy greens) 1 cup corn kernels (can, drained - about 2/3 can) 1/2 red onion , finely sliced 300g/ 10oz cherry or grape tomatoes (or 2 normal tomatoes chopped) 2 cucumbers , halved lengthwise then sliced 1cm / 1/3" (or 1 long English/telegraph cucumber) 2 avocados , cut into bite size chunks (or 1 giant one) 150g/ 5oz bacon , cooked until crisp then chopped (optional)"',
            picture:'"https://www.recipetineats.com/wp-content/uploads/2020/06/Quick-Chicken-Salad_6.jpg?resize=650,910"'
    
        },
        {
            name:'"Grilled Chicken Pasta Salad"',
            nutrition:'"456"',
            description:'"This healthy grilled chicken pasta salad is full of fresh summer flavors and smoky BBQ sauce! The creamy dressing is lightened up with Greek yogurt."',
            price:15,
            type:'"salad"',
            ingrediends:'"2-3 boneless/skinless chicken breasts 4 cups uncooked pasta Handful cilantro chopped 1/4 medium red onion chopped (or to taste) 1 cup smoked cheddar grated 1 avocado chopped BBQ sauce for brushing on the chicken (start with 1/3 cup) 1/4 cup olive oil Juice from 1/2 lemon 2 dashes Italian seasoning 2 cloves garlic minced Salt & pepper to taste 1/3 cup plain Greek yogurt (I used 2%) 1 tablespoon BBQ sauce 1/2 tablespoon vinegar 1/2 tablespoon brown sugar Pinch of garlic powder Salt & pepper to taste"',
            picture:'"https://www.saltandlavender.com/wp-content/uploads/2017/06/grilled-chicken-pasta-salad-1-680x1020.jpg"'
    
        },
        // burgers
        {
            name:'"Chili’s Santa Fe Burger"',
            nutrition:'"986"',
            description:'"Craving some Chili’s, but don’t want to go out? This Santa Fe burger is the perfect copycat for the delicious one sold at the restaurant! Pair a beef patty with cheese, avocado, onion, jalapenos, and some other great toppings, and you’ll never have to go to Chili’s again."',
            price:15,
            type:'"burger"',
            ingrediends:'"extra-lean ground beef jalapeno pepper brioche burger buns pickles tomato red onion avocado monterey jack cheese cilantro Santa Fe sauce (mayo, lime juice, chili powder, paprika & onion powder)"',
            picture:'"https://gypsyplate.com/wp-content/uploads/2021/10/Chilis-Santa-Fe-Burger-13-600x900.webp"'
        },
        {
            name:'"Big Mac"',
            nutrition:'"867"',
            description:'"This Big Mac recipe tastes just like your favourite McDonald’s burger with juicy hamburger patties, sesame seed buns and secret sauce."',
            price:15,
            type:'"burger"',
            ingrediends:'"4 sesame seed hamburger buns, plus 4 more bottom buns to act as the middle bun 1 lb extra-lean ground beef 4 cheese slices dill pickles white onion finely chopped iceberg lettuce finely shredded"',
            picture:'"https://gypsyplate.com/wp-content/uploads/2021/10/Homemade-Big-Mac-Recipe-6-600x900.webp"'
        },
        {
            name:'"Crispy Fish Burger"',
            nutrition:'"767"',
            description:'"Crispy fish burger with easy garlic lemon mayo and a pile of crispy and totally addictive shoestring fries. This Fish Sandwich is a great way to get the kids (and husband) to eat more fish!"',
            price:14,
            type:'"burger"',
            ingrediends:'"4 small fillets of white fish - (I used haddock) weighing approx 350g (12.3oz) altogether 50 g plain (all purpose) flour 2 eggs - lightly beaten 150 g breadcrumbs - (either fresh or shop bought – panko breadcrumbs are good) pinch salt and pepper ½ tsp paprika 2 tbsp vegetable oil 4 toasted brioche rolls 8 lettuce leaves"',
            picture:'"https://gypsyplate.com/wp-content/uploads/2021/10/Crispy-Fish-Burger-with-Shoestring-Fries-Recipe-tall-fs-600x900.webp"'
        },
        {
            name:'"Cowboy Burger"',
            nutrition:'"876"',
            description:'"It doesn’t get better than Cowboy Burgers! Loaded with cheese, bacon, avocado, onion rings, and spicy mayo! Best BBQ Cheeseburger out there!"',
            price:17,
            type:'"burger"',
            ingrediends:'"4 burger buns 4 slices cheddar cheese 8 prepared onion rings 8 slices avocado 8 slices prepared bacon 4 slices tomato 4 slices leaf lettuce 1/4 cup mayonnaise 1/4 cup bbq sauce 1 tablespoon red pepper flakes"',
            picture:'"https://gypsyplate.com/wp-content/uploads/2021/10/cowboy-burger-recipe-2-600x900.jpg"'
        },
        {
            name:'"Mediterranean Portobello Beef Burger"',
            nutrition:'"987"',
            description:'"These Mediterranean Portobello Beef Burgers are a healthy BBQ recipe topped with garlic herb cheese, roasted red peppers and basil mayo."',
            price:13,
            type:'"burger"',
            ingrediends:'"1 tbsp olive oil 1/2 block garlic and herb cheese, grated or white cheddar cheess 1 red bell pepper, sliced 1 portobello mushroom, sliced 1 medium sized red onion, sliced 1 package Arugula 4 burger buns 1 lb extra-lean ground beef 1 portobello mushroom, finely minced 1/3 cup breadcrumbs 1 small yellow onion, grated 1 egg 2 tsp dijon mustard 1 tsp garlic powder 1 tsp salt 1/2 tsp pepper"',
            picture:'"https://gypsyplate.com/wp-content/uploads/2021/10/Mediterranean-Portobello-Beef-Burgers-7-600x853.jpg"'
        },
        {
            name:'"Juicy Air Fryer Hamburger"',
            nutrition:'"875"',
            description:'"Juicy Air Fryer Hamburgers are the best burgers you will ever have, hands down! These are so succulent, they just might replace your grilled burgers forever!"',
            price:19,
            type:'"burger"',
            ingrediends:'"1 pound 80/20 ground beef 3 garlic cloves minced 1 Tablespoon worchestershire sauce salt and pepper 4 hamburger buns"',
            picture:'"https://gypsyplate.com/wp-content/uploads/2021/10/airfryerhamburgershero-600x900.jpg"'
        },
        {
            name:'"Zinger Burger"',
            nutrition:'"898"',
            description:'"This KFC-Style Crispy Fried Chicken Burger aka Zinger Burger is the ultimate comfort food. Ditch the restaurants and enjoy these utterly crunchy burgers at your home. Its packed with loads of flavour, requires no fancy ingredient and is pretty easy to recreate."',
            price:13,
            type:'"burger"',
            ingrediends:'"500 g chicken fillets breasts/thighs boneless 1 teaspoon salt 1 teaspoon white pepper 2 tablespoon sriracha sauce or chili sauce 1 tablespoon mustard sauce 1 teaspoon ginger powder 1 teaspoon garlic powder ¼ cup all-purpose flour ¼ cup cornflour ¼ teaspoon baking powder ½ teaspoon paprika powder ½ teaspoon salt 1 tablespoon sriracha sauce or chili sauce ¾ cup cold milk 1 cup all-purpose flour ½ teaspoon baking powder ½ cup mayonnaise 4 tablespoon ketchup 2 tablespoon vinegar 2 tablespoon mustard sauce 4 hamburger buns 4 salad leaves Tomato slices 4-8 Cheddar cheese slices"',
            picture:'"https://gypsyplate.com/wp-content/uploads/2021/10/crispychickenburger-683x1024-1-600x900.jpg"'
        },
        // sushi
        {
            name:'"Spicy Tuna Rolls"',
            nutrition:'"828"',
            description:'"Fiery Spicy Tuna Rolls with sashimi grade tuna tossed in sesame Sriracha sauce, topped with spicy mayo for that extra oomph!"',
            price:15,
            type:'"sushi"',
            ingrediends:'"1 ½ cup sushi rice (cooked and seasoned) (each roll requires ¾ cup (135 g) sushi rice. 1 rice cooker cup (180 ml /150 g) makes 330 g (12 oz, 1 ¾ cup) of cooked rice.)  4 oz sashimi-grade tuna 3 tsp sriracha sauce ½ tsp roasted sesame oil 2 green onions/scallions (cut into thin rounds) 1 sheet nori (dried laver seaweed) (each roll requires half sheet; cut in half crosswise) 2 Tbsp toasted white sesame seeds Homemade Spicy Mayo"',
            picture:'"https://www.justonecookbook.com/wp-content/uploads/2020/12/Spicy-Tuna-Rolls-8963.jpg"'
        },
        {
            name:'"Shrimp Tempura Roll"',
            nutrition:'"764"',
            description:'"Shrimp tempura roll is crispy shrimp with avocado and cucumber, all wrapped up in seasoned rice. Making sushi at home is actually quite fun and easy to do!"',
            price:13,
            type:'"sushi"',
            ingrediends:'"2 cups uncooked sushi rice 2 cups water 2 tablespoons rice vinegar 2 tablespoons sugar 1 1/2 teaspoons salt 4 sheets of nori 8 pre-cooked tempura shrimp 8 strips of cucumber 8 slices of avocado 3 tablespoons black and/or white sesame seeds"',
            picture:'"https://www.dinneratthezoo.com/wp-content/uploads/2016/07/shrimp-tempura-roll-5.jpg"'
        },
        {
            name:'"California Rolls"',
            nutrition:'"823"',
            description:'"Easy homemade California roll with sushi rice, crab, avocado and seaweed. Learn how to make California rolls with the step-by-step picture guide."',
            price:11,
            type:'"sushi"',
            ingrediends:'"1 cup sushi rice, Japanese short-grain rice 1 1/2 cups water 1 tablespoon Japanese rice vinegar 1/2 tablespoon sugar 1/4 teaspoon salt toasted white sesame 3 oz (85g) artificial crab meat or real crab lump meat ( 2 tablespoons mayonnaise 1 squirt lemon juice 1 small cucumber, seeded and cut into 3.5-inch strips 1 avocado, peeled and cut into strips"',
            picture:'"https://rasamalaysia.com/wp-content/uploads/2016/04/california-rolls.jpg"'
        },
        {
            name:'"Temari Sushi"',
            nutrition:'"815"',
            description:'"Meet your new sushi obsession! Colorful, adorable, and bite size, Temari Sushi is the perfect finger food to serve at your next home gathering. Plus, they are about the most fun you can have in the kitchen! "',
            price:14,
            type:'"sushi"',
            ingrediends:'"Radishes, thinly sliced Avocado, sliced Carrot Cucumber, thinly sliced Scallions, finely chopped Shiso leaves Black and white sesame seeds Crab sticks Nori Sushi grade salmon roe Sushi grade suna Boiled shrimp"',
            picture:'"https://pickledplum.com/wp-content/uploads/2019/12/temari-sushi-1360-1-680x1020.jpg"'
        },
        // bbq
        {
            name:'"Easy Baked Sweet Potato Fries"',
            nutrition:'"800"',
            description:'"Sweet potato fries. They are the new hot shot craze on any restaurant menu. Your regular french fries have taken a back seat since these colorful sweet and salty fries started making an appearance a few years back. Albeit they are not as super crunchy as your russet potato fries, but there is something about these orangey sweet fries that’s so addictive and crave-worthy!"',
            price:14,
            type:'"bbq"',
            ingrediends:'"1 lb sweet potatoes 2 Tbsp olive oil 1/2 tsp garlic powder 1/2 tsp black pepper 1/2 tsp paprika 2 Tbsp corn starch Sea salt to taste"',
            picture:'"https://gypsyplate.com/wp-content/uploads/2020/04/baked-sweet-potato-fries_10.jpg"'
        },
        {
            name:'"Bacon Wrapped Brussels Sprouts"',
            nutrition:'"655"',
            description:'"Awesome Bacon Wrapped Brussels Sprouts are beautifully wrapped Brussel sprouts in strips of bacon then brushed with a maple, brown sugar glaze and baked until golden brown. This is one MUST make appetizer this holiday season!"',
            price:10,
            type:'"bbq"',
            ingrediends:'"1 pound Brussels Sprouts salt and pepper 1 pound bacon 1/2 cup maple syrup 3 Tablespoons brown sugar"',
            picture:'"https://therecipecritic.com/wp-content/uploads/2019/12/bacon_wrapped_brussels_sprouts.jpg"'
        },
        {
            name:'"Baked Garlic Herb Potato Wedges"',
            nutrition:'"845"',
            description:'"The crispiest potato wedges ever! And it is completely BAKED!!! Served with the most amazing, garlicky-herb mixture!"',
            price:24,
            type:'"bbq"',
            ingrediends:'"2 pounds fingerling potatoes, halved lengthwise 3 tablespoons canola oil Kosher salt and freshly ground black pepper, to taste 3 cloves garlic 1/2 shallot 1/2 cup parsley leaves 1/2 cup basil leaves 1/3 cup extra-virgin olive oil"',
            picture:'"https://s23209.pcdn.co/wp-content/uploads/2018/07/Baked-Garlic-Herb-Potato-WedgesIMG_5811.jpg"'
        },
        {
            name:'"Roasted Mexican Street Corn"',
            nutrition:'"815"',
            description:'"Classic Mexican street food right at home now. BAKED OR GRILLED! And this cream sauce is TO DIE FOR!!"',
            price:14,
            type:'"bbq"',
            ingrediends:'"1/4 cup mayonnaise 1/4 cup sour cream 1/2 teaspoon garlic powder Juice of 1 lime 6 ears corn 1 teaspoon chili powder 1/2 cup crumbled cotija cheese 1/4 cup chopped fresh cilantro leaves"',
            picture:'"https://s23209.pcdn.co/wp-content/uploads/2017/06/Roasted-Mexican-Street-Corn.jpg"'
        },
        {
            name:'"Loaded BBQ Baked Potatoes"',
            nutrition:'"719"',
            description:'"We’re taking these Loaded BBQ Baked Potatoes to the max! Perfectly overstuffed with a creamy garlic herb spinach and potato mixture and loaded up with BBQ chicken, pan-roasted mushrooms, bleu cheese crumbles, crispy onions, and chives."',
            price:18,
            type:'"bbq"',
            ingrediends:'"potatoes chicken mushrooms garlic herb spreadable cheese, goat cheese, etc. spinach BBQ sauce"',
            picture:'"https://pinchofyum.com/cdn-cgi/image/width=680,height=99999,fit=scale-down/wp-content/uploads/BBQ-Chicken-Baked-Potatoes-1.jpg"'
        },
        // snacks
        {
            name:'"Low Carb Jalapeño Poppers"',
            nutrition:'"615"',
            description:'"Jalapeno poppers are one of my all time favorite appies. Fresh and flavorful jalapenos are stuffed with cream cheese, cheddar, and bacon then baked until hot and bubbly."',
            price:14,
            type:'"snacks"',
            ingrediends:'"10 jalapeno peppers 8 oz cream cheese softened ½ teaspoon garlic powder 1 cup shredded cheddar cheese divided 3 slices crisp bacon crumbled"',
            picture:'"https://easylowcarb.com/wp-content/uploads/2018/07/ELC-Easy-Low-Carb-Jalepeno-Poppers-22.jpg"'
        },
        {
            name:'"Cheese Chips"',
            nutrition:'"875"',
            description:'"These tasty bites are perfect for snacking, dipping, crumbling on top of soup, and so much more. "',
            price:20,
            type:'"snacks"',
            ingrediends:'"8 ounces sharp cheddar grated 3 egg whites ½ cup almond flour 1 teaspoon garlic powder 1 teaspoon smoked paprika ¼ teaspoon sea salt"',
            picture:'"https://kicking-carbs.com/wp-content/uploads/2022/01/keto-cheese-chips-H-680x1020.jpg"'
        },
        {
            name:'"Popcorn Chicken"',
            nutrition:'"435"',
            description:'"Crispy, tender, and flavorful-to-boot! This baked paleo and keto popcorn chicken is a real treat, with all good-for-you ingredients!"',
            price:16,
            type:'"snacks"',
            ingrediends:'"500 g deboned chicken thighs or chicken breast, diced into bite sized pieces 1/2 cup sour cream or full-fat coconut cream 1 tablespoon white wine vinegar 1 teaspoon poultry seasoning 2 cloves garlic ran through a press 1/4 teaspoon freshly ground black pepper kosher salt to taste 1 egg lightly beaten 1 tablespoon sour cream 90 g pork rinds crushed* 25 g Parmesan cheese finely grated 1 1/2 teaspoons paprika 1 teaspoon oregano 1/2 teaspoon garlic powder 1/4 teaspoon onion powder 1/4 teaspoon freshly ground black pepper pinch cayenne pepper kosher salt to taste"',
            picture:'"https://www.gnom-gnom.com/wp-content/uploads/2019/05/Paleo-Keto-Popcorn-Chicken-Gnom-Gnom-2.jpg"'
        },
        // dessert
        {
            name:'"Strawberry and Cream Popsicles"',
            nutrition:'"432"',
            description:'"These Strawberry and Cream Popsicles are one of my favorites for a scorching hot summer day. You can make these at home with such ease your kids will love the sweet and creamy flavor. Save yourself a dollar or two when the ice cream man comes around. "',
            price:20,
            type:'"dessert"',
            ingrediends:'" 1 can (~13 ounces) full-fat coconut cream 3 cups fresh strawberries 4 tablespoons pure maple syrup ⅛ tsp cornstarch (optional)"',
            picture:'"https://aclassictwist.com/wp-content/uploads/2021/03/Strawberry-and-Cream-Popsicles-1.jpg"'
        },
        {
            name:'"Nutella Berry Crepes"',
            nutrition:'"743"',
            description:'"These Nutella Berry Crepes are sweet and delicious, stuffed with Nutella hazelnut spread and fresh berries. Using my tried and true method for perfect crepes, this recipe is bound to be a success. They’re the perfect choice when you’re looking for the best way to start off a special day."',
            price:25,
            type:'"dessert"',
            ingrediends:'"▢2 eggs 2 tablespoon sugar 1 teaspoon vanilla extract 1/4 teaspoon salt 2 cups milk 1 cup all-purpose flour 1 tablespoon butter unsalted and melted 2 tablespoon butter for cooking the crepes"',
            picture:'"https://www.jocooks.com/wp-content/uploads/2014/05/nutella-berry-crepes-1-768x960.jpg"'
        },
        {
            name:'"Peaches and Cream Jello"',
            nutrition:'"633"',
            description:'"The flavors came together really well. It’s SO EASY! With just 4 ingredients, you’ll think – “that’s it?” Yep, that’s it.  Enjoy this yummy, kid-friendly layered jello recipe. I’m just dreaming up all kinds of flavor possibilities with this. Ultra yum."',
            price:18,
            type:'"dessert"',
            ingrediends:'"2 pkgs. (6 oz each) peach jello, made according to package instructions 2 packets unflavored gelatin (2 packets = 14 grams or 1 1/2 Tbsp ) 1 cup boiling hot water + 1 cup cold water 14 oz can sweetened Condensed milk 15 oz can sliced peaches, cut into 1/2″ thick slices"',
            picture:'"https://natashaskitchen.com/wp-content/uploads/2015/02/Peaches-Cream-Jello1.jpg"'
        },
        {
            name:'"Apple Galette"',
            nutrition:'"875"',
            description:'"Apple Galette – A buttery pie-style crust is layered with plenty of sweetened fresh apples and then baked until the fruit is tender and the crust is beautifully golden brown and supremely flakey. It’s one of the absolute best fall desserts!"',
            price:15,
            type:'"dessert"',
            ingrediends:'"1 1/2 cups (214g) unbleached all-purpose flour (scoop and level to measure) 1 Tbsp granulated sugar 1/4 tsp salt 10 Tbsp unsalted butter (cut into 1/2-inch cubes), plus 2 Tbsp unsalted butter (diced into 1/4-inch cubes) 4 to 5 Tbsp ice water 1 1/2 lbs (3 large) baking apples 1/4 cup granulated sugar 1/2 tsp ground cinnamon 1 large egg + 1/2 Tbsp water 1 Tbsp turbinado sugar or sparkling sugar 1 Tbsp honey (warmed), corn syrup, or 1 1/2 Tbsp apricot preserves strained and mixed with 1/2 Tbsp water (optional)"',
            picture:'"https://www.cookingclassy.com/wp-content/uploads/2021/10/apple-galette-25-600x900.jpg"'
        },
        {
            name:'"Caramel Apples"',
            nutrition:'"745"',
            description:'"These homemade caramel apples look so impressive, but are quite easy to make. Dip your apples in melted chocolate and roll them in toppings such as nuts and candy for gourmet apples that make the perfect dessert or gift."',
            price:18,
            type:'"dessert"',
            ingrediends:'"4 lollipop or wooden craft sticks 4 Granny Smith apples stems removed 11 ounce package of caramels unwrapped 2 tablespoons heavy cream can also use water 1 1/2 cups chocolate chips or candy melts white, dark or milk chocolate, or a combination 1 cup assorted toppings such as chopped nuts and candies"',
            picture:'"https://www.dinneratthezoo.com/wp-content/uploads/2019/03/caramel-apples-5.jpg"'
        },
        {
            name:'"Peach Cobbler"',
            nutrition:'"867"',
            description:'"This Peach Cobbler recipe comes to you from a Southern lady I know who is everything you imagine a Southern lass to be: a big personality, big laugh, big heart, and a very (very!) big appetite for life and food. You’ll love how the syrup is made using peach juices, rather than just a plain sugar syrup. Peach flavour to the max!"',
            price:21,
            type:'"dessert"',
            ingrediends:'"1.5kg / 3lb (8) yellow peaches (ripe and juicy!), peeled, stone removed, cut into eight wedges (Note 1) 1/4 cup caster / superfine sugar 1 tsp cornflour / cornstarch 1 tbsp lemon juice (plus more as desired) 1/8 tsp salt 1 1/4 cups flour , plain/all purpose 1/3 cup caster / superfine sugar 1 tsp baking powder 1/2 tsp baking soda (bi-carb) (or extra 1 1/2 tsp baking powder) 1/4 tsp salt 85g / 6 tbsp unsalted butter 1/2 cup plain yoghurt (or sour cream), full fat 1 tsp demerara sugar (Note 3) 1/2 tsp cinnamon powder"',
            picture:'"https://www.recipetineats.com/wp-content/uploads/2021/07/Peach-Cobbler_76.jpg?resize=650,813"'
        },
        // breakfast
        {
            name:'"Denver Omelette"',
            nutrition:'"754"',
            description:'"Denver Omelette – Are you like me right now, still feeling the holiday spirit? Taking it slow and savoring the long holiday weekend? Probably still in pajamas, sipping on coffee, thinking what to cook for that first meal of the day."',
            price:20,
            type:'"breakfast"',
            ingrediends:'"6 eggs 1 small onion, diced 1/2 small red bell pepper, diced 1/2 small green bell pepper, diced 1/2 small yellow bell pepper, diced 1 cup ham, diced 1/2 cup cheddar cheese, shredded 3 Tbsp butter, divided Salt to taste Pepper to taste"',
            picture:'"https://gypsyplate.com/wp-content/uploads/2020/12/denver-omelette_04-600x900.jpg"'
        },
        {
            name:'"Banana Pancakes"',
            nutrition:'"654"',
            description:'"Banana Pancakes are easy to make and one of the best ways to use ripe bananas. This is like having Banana Bread in pancake form. The pancake batter can be made ahead and refrigerated overnight, plus the pancakes reheat really well. Also, the kids love these so we’re winning the breakfast battles with this recipe."',
            price:20,
            type:'"breakfast"',
            ingrediends:'"1 1/4 cups buttermilk 1 1/2 cups all-purpose flour, measured correctly 1 Tbsp granulated sugar 1 tsp baking soda 1/4 tsp salt 3 Tbsp unsalted butter, melted 2 large eggs 1 tsp vanilla extract 2 medium bananas, mashed (1 cup) 2 Tbsp olive oil, divided, to sauté"',
            picture:'"https://natashaskitchen.com/wp-content/uploads/2021/06/Banana-Pancakes-4.jpg"'
        },
        {
            name:'"Sausage Gravy"',
            nutrition:'"856"',
            description:'"Biscuits and gravy is a classic weekend breakfast staple. This easy Homemade Sausage Gravy recipe only takes 20 minutes to prepare and is as good as any breakfast joint. Serve over fresh hot biscuits and you’re set!"',
            price:20,
            type:'"breakfast"',
            ingrediends:'"1 pound breakfast sausage 2 tablespoons unsalted butter ⅓ cup all-purpose flour 2 ½ cups milk 1 teaspoon black pepper ½ teaspoon salt ¼ teaspoon garlic powder ⅛ teaspoon paprika Fresh sage finely chopped, for garnish"',
            picture:'"https://www.yellowblissroad.com/wp-content/uploads/2019/08/Sausage-Gravy-4.jpg"'
        },
        {
            name:'"Steak & Eggs"',
            nutrition:'"768"',
            description:'"So quick, easy, and fancy pants without any of the hard work! Served with the most amazing herb sauce. SO SO GOOD."',
            price:15,
            type:'"breakfast"',
            ingrediends:'"½ cup chopped fresh parsley leaves ½ cup chopped fresh basil 2 tablespoons chopped fresh chives 1 small shallot, diced 2 cloves garlic, minced ¼ teaspoon crushed red pepper flakes ⅓ cup extra virgin olive oil 1 tablespoon red wine vinegar Kosher salt and freshly ground black pepper, to taste 1 ½ pounds skirt steak 1 tablespoon canola oil 6 fried eggs"',
            picture:'"https://s23209.pcdn.co/wp-content/uploads/2021/01/Best-Ever-Steak-and-EggsIMG_1609.jpg"'
        },
        {
            name:'"Frittata"',
            nutrition:'"867"',
            description:'"Frittatas have saved me on more hungry weeknights than I care to count. As long as I have a few vegetables and maybe a little meat to throw in a skillet, I can have a frittata on the table in about 20 minutes. Let me tell you, there is nothing better than diving into a plate of steaming veggie-filled eggs when you’re home late and starving."',
            price:15,
            type:'"breakfast"',
            ingrediends:'"6 large eggs, enough to cover the ingredients 1/4 cup heavy cream 1 teaspoon kosher salt, divided 4 slices thick-cut bacon (8 ounces), chopped (optional) 2 small Yukon gold potatoes, peeled and thinly sliced 1/4 teaspoon freshly ground black pepper 2 cups baby spinach (2 ounces) 2 cloves garlic, minced 2 teaspoons fresh thyme leaves 1 cup shredded cheese, such as Gruyère, Fontina, or cheddar (optional)"',
            picture:'"https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2Farchive%2F073225a69897a6022f3a9ce30b43f01e107a0858"'
        },
        // ua_cuis
        {
            name:'"Borsch with garlic fritters"',
            nutrition:'"1205"',
            description:'"Our family go-to recipe for Borscht (Red Beet Soup). Its best to have all of the ingredients prepped and ready to go which makes this soon super easy and care free. Serve with a dollop of sour cream or real mayo."',
            price:13,
            type:'"ukrainian cuisine"',
            ingrediends:'"3 medium beets, peeled and grated 4 Tbsp olive oil, divided 8 cups chicken broth , + 2 cups water 3 medium yukon potatoes, peeled and sliced into bite-sized pieces 2 carrots, peeled and thinly sliced"',
            picture:'"https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/09/5033415296_42afb36608_b.jpg"'
        },
        {
            name:'"Potato pancakes"',
            nutrition:'"768"',
            description:'"Deruny, or potato pancakes, are a perfect course for breakfast or dinner. They are usually freshly fried or baked. If you want to make a good batch of deruny, first off, you should make sure the potatoes are finely grated."',
            price:15,
            type:'"ukrainian cuisine"',
            ingrediends:'"4 large Yukon potatoes (about 2 lbs) 1 small yellow onion (4 oz) 1 large egg 3 tablespoons all-purpose flour 1 teaspoon fine salt or to taste 1/4 teaspoon baking soda grapeseed oil for frying"',
            picture:'"https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/09/potato-pancakes-544712_1920.jpg"'
        },
        {
            name:'"Vareniki"',
            nutrition:'"734"',
            description:'"Vareniki is a kind of dumpling. It is made of dough, but the filling depends on the imagination and taste preferences of the chef and their guests. Cabbages, meat, mushrooms, cottage cheese, cherries, currant or potatoes are the most typical fillings."',
            price:10,
            type:'"ukrainian cuisine"',
            ingrediends:'"2 cups flour , sifted 2 eggs , lightly beaten ½ cup milk (at 97 F / 36°C) 2 tablespoons vegetable oil 1 teaspoon salt 1 lb potatoes 2 onions , diced ½ cup milk (boiling) 4 tablespoons neutral vegetable oil 4 tablespoons butter 2 scallions , chopped 1 onion , diced 2 tablespoons caster sugar 1 tablespoon butter Salt Pepper"',
            picture:'"https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/09/cooking-2132874_1920.jpg"'
        },
        {
            name:'"Holodets"',
            nutrition:'"765"',
            description:'"This strange dish shocks tourists. But, for Ukrainians, it is the central dish served at all celebrations. Holodets is made of meat broth, frozen to a jelly-like state, with pieces of meat inside. One of the main components for this kind of aspic is pork leg. To be more specific, the lowest part, the one that ends with hoofs."',
            price:8,
            type:'"ukrainian cuisine"',
            ingrediends:'"2 lbs pig, cow or chicken feet (or use chicken legs as an alternative) 1 lb boneless meat (any kind of meat, for example chicken thighs) Water 1 onion, peeled 2 tsp salt 1/8 tsp pepper 2 bay leaves Clear gelatin"',
            picture:'"https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/09/eat-1400737_1920.jpg"'
        },
        {
            name:'"Nalisniki"',
            nutrition:'"453"',
            description:'"Anything that can be wrapped in a pancake can be put inside nalisniki—but the traditional filling is cottage cheese and raisins. The secret to perfecting this dish is cooking it slowly on a low fire. Nalisniki could be mistaken for pancakes, but the difference is that Ukrainian versions are thinner, meaning your filling will dominate the taste."',
            price:15,
            type:'"ukrainian cuisine"',
            ingrediends:'"1 1/2 cups 2% or whole milk (I use whole milk) 4 large eggs - room temp 4 tablespoons unsalted butter - melted 1 cup all-purpose flour 2 tablespoons granulated sugar 1/8 teaspoon fine salt 1 1/2 cups farmer cheese (crumbled into measuring cup) 4 oz cream cheese - softened 2 tablespoons cool whip - slightly thawed 1/2 cup granulated sugar (OR 3/4 cup powdered sugar) 1/4 teaspoon vanilla extract"',
            picture:'"https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/09/pancakes-2020870_1920.jpg"'
        },
        // hot drinks
        {
            name:'"Tea"',
            nutrition:'"105"',
            description:'"Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis, an evergreen shrub native to China, India and other East Asian countries"',
            price:5,
            type:'"hot drink"',
            ingrediends:'"tea"',
            picture:'"https://www.google.com/imgres?imgurl=https%3A%2F%2Fmyhaneerbil.com%2Fwp-content%2Fuploads%2F960x0.jpg&imgrefurl=https%3A%2F%2Fmyhaneerbil.com%2Ftea-is-a-serious-passion%2F&tbnid=TTuFJY80Mj10FM&vet=12ahUKEwjTtMOi1o_4AhUEtBoKHfVMDxEQMygBegUIARDBAQ..i&docid=S0aU2nsqJzOChM&w=960&h=640&q=tea&ved=2ahUKEwjTtMOi1o_4AhUEtBoKHfVMDxEQMygBegUIARDBAQ"'
        },
        {
            name:'"Coffee"',
            nutrition:'"202"',
            description:'"Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain flowering plants in the Coffea genus. From the coffee fruit, the seeds are separated to produce a stable, raw product: unroasted green coffee."',
            price:7,
            type:'"hot drink"',
            ingrediends:'"black coffee"',
            picture:'"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/220px-A_small_cup_of_coffee.JPG"'
        },
        {
            name:'"Mulled Wine"',
            nutrition:'"154"',
            description:'"This traditional homemade mulled wine recipe is incredibly easy to make and always SO cozy and delicious."',
            price:10,
            type:'"hot drink"',
            ingrediends:'"1 (750 ml) bottle of dry red wine 1/4 cup brandy (or orange liqueur) 1 orange, sliced into rounds (also peeled, if you would like a less-bitter drink) 8 whole cloves 2 cinnamon sticks 2 star anise 2 to 4 tablespoons sugar, honey, or maple syrup to taste (or your desired sweetener) optional garnishes: citrus slices (orange, lemon and/or lime), extra cinnamon sticks, extra star anise"',
            picture:'"https://www.gimmesomeoven.com/wp-content/uploads/2013/10/Mulled-Wine-Recipe-1-2.jpg"'
        },
        // cold drinks
        {
            name:'"Coca-Cola"',
            nutrition:'"543"',
            description:'"Coca-Cola, or Coke, is a carbonated soft drink manufactured by the Coca-Cola Company. Originally marketed as a temperance drink and intended as a patent medicine, it was invented in the late 19th century by John Stith Pemberton in Atlanta, Georgia."',
            price:5,
            type:'"cold drink"',
            ingrediends:'"cola"',
            picture:'"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTATHmfLv5_t_hfjPwcjGXdGT4EroaZYXVow&usqp=CAU"'
        },
        {
            name:'"Fanta"',
            nutrition:'"345"',
            description:'"Just cold Fanta - Perfection."',
            price:5,
            type:'"cold drink"',
            ingrediends:'"fanta"',
            picture:'"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa_Z_ao5Nuip_sFt7gXQw3QvZlWktYxhalzw&usqp=CAU"'
        },
        {
            name:'"Sprite"',
            nutrition:'"487"',
            description:'"Sprite."',
            price:5,
            type:'"cold drink"',
            ingrediends:'"Sprite"',
            picture:'"https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F41znAsVv2UL._SX425_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.de%2F-%2Fen%2Fdp%2FB015R92NCG&tbnid=LTx6wdENR0TAtM&vet=12ahUKEwj0lMqB2o_4AhVG4BoKHVLYCJEQMygBegUIARDGAQ..i&docid=8HxYqeeflDHaeM&w=425&h=425&itg=1&q=sprite&ved=2ahUKEwj0lMqB2o_4AhVG4BoKHVLYCJEQMygBegUIARDGAQ"'
        },
        {
            name:'"Juice"',
            nutrition:'"187"',
            description:'"Juices of Most Fruits On This Planet."',
            price:9,
            type:'"cold drink"',
            ingrediends:'"Natural Fruits"',
            picture:'"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcordis.europa.eu%2Fdocs%2Fresults%2Fimages%2F2020-02%2F415400.jpg&imgrefurl=https%3A%2F%2Fcordis.europa.eu%2Farticle%2Fid%2F415400-creating-a-better-healthier-juice%2Fde&tbnid=WUbBRHQoKPvF0M&vet=12ahUKEwiYkv_Y2o_4AhUNohoKHUhxCewQMygBegUIARDXAQ..i&docid=_Dt2MBxFlOUDqM&w=675&h=516&q=juice&ved=2ahUKEwiYkv_Y2o_4AhUNohoKHUhxCewQMygBegUIARDXAQ"'
        },
        {
            name:'"Water"',
            nutrition:'"142"',
            description:'"Mineral Water"',
            price:7,
            type:'"cold drink"',
            ingrediends:'"Water"',
            picture:'"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.thespruceeats.com%2Fthmb%2FkCEmSVhcy5Fobl9X2SE0t-W8KF8%3D%2F2121x1414%2Ffilters%3Afill(auto%2C1)%2FGettyImages-488636063-5ab2dbd8a8ff48049cfd36e8ad841ae5.jpg&imgrefurl=https%3A%2F%2Fwww.thespruceeats.com%2Fwhat-is-mineral-water-4772011&tbnid=1zNUQadjS2xufM&vet=12ahUKEwj7zZmU24_4AhVHeRoKHSRQBMEQMygBegUIARCMAg..i&docid=Z1PNrhy0dZbC3M&w=2121&h=1414&q=minearal%20water&ved=2ahUKEwj7zZmU24_4AhVHeRoKHSRQBMEQMygBegUIARCMAg"'
        },
        // alco drinks
        {
            name:'"Beer"',
            nutrition:'"354"',
            description:'"Beer is one of the oldest and most widely consumed alcoholic drinks in the world, and the third most popular drink overall after water and tea."',
            price:8,
            type:'"alcohol drink"',
            ingrediends:'"beer"',
            picture:'"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5uzs3A9iIqxJ1RXt1a5zIHG6E8Qpn-a0oYQpwGaRrwl4SaKhgQFbhBK1LkaNwbvhoTbs&usqp=CAU"'
        },
        {
            name:'"Wine"',
            nutrition:'"387"',
            description:'"Red wine is a type of wine made from dark-colored grape varieties. The color of the wine can range from intense violet, typical of young wines, through to brick red for mature wines and brown for older red wines. The juice from most purple grapes is greenish-white, the red color coming from anthocyan pigments present in the skin of the grape."',
            price:7,
            type:'"alcohol drink"',
            ingrediends:'"grapes"',
            picture:'"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.thespruceeats.com%2Fthmb%2FZ6Q_Dfy2jlBi4_K0saTn3z3Hgko%3D%2F3840x3840%2Fsmart%2Ffilters%3Ano_upscale()%2Fred-wine-is-poured-into-a-glass-from-a-bottle--light-background--1153158143-98320451802c485cb6d7b5437c7fd60a.jpg&imgrefurl=https%3A%2F%2Fwww.thespruceeats.com%2Ftypes-of-red-wine-3511068&tbnid=3722MoZUZK6KdM&vet=12ahUKEwjggvXh24_4AhXU3oUKHfHBB60QMygGegUIARDxAg..i&docid=4kfCnlk0nLLkXM&w=3840&h=3840&q=red%20wine&hl=ru&ved=2ahUKEwjggvXh24_4AhXU3oUKHfHBB60QMygGegUIARDxAg"'
        },
        {
            name:'"Champagne"',
            nutrition:'"253"',
            description:'"Champagne is a sparkling wine originated and produced in the Champagne wine region of France under the rules of the appellation, that demand specific vineyard practices, sourcing of grapes exclusively from designated places within it, specific grape-pressing methods and secondary fermentation of the wine in the bottle to cause carbonation."',
            price:7,
            type:'"alcohol drink"',
            ingrediends:'"Champagne"',
            picture:'"https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F474x%2F3a%2Fdc%2F5d%2F3adc5d7dbc6e6ad3a8f08914ffff9c3c--points.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.at%2Fpin%2F138133913548117313%2F%3Famp_client_id%3DCLIENT_ID(_)%26mweb_unauth_id%3D%7B%7Bdefault.session%7D%7D%26from_amp_pin_page%3Dtrue&tbnid=vkx-WEyUpGIp4M&vet=12ahUKEwiS3LTF3I_4AhUlgc4BHaBeB-EQMygGegUIARDSAw..i&docid=HtdhgvKnaGTklM&w=374&h=664&itg=1&q=champaign&hl=ru&ved=2ahUKEwiS3LTF3I_4AhUlgc4BHaBeB-EQMygGegUIARDSAw"'
        },
        // {
        //     name:'""',
        //     nutrition:'""',
        //     description:'""',
        //     price:7,
        //     type:'"cold drink"',
        //     ingrediends:'""',
        //     picture:'""'
        // },

        
        
    ]
    var position = new Position();
    position.getData((e, r, f)=>{
        var data = initialPositions.filter(b=>r.findIndex(a=>a.picture===b.picture.substring(1,b.picture.length-1))===-1)
        data.forEach(a=>position.add(a))
    })
})



class Table {

    constructor(name, createTableQuery){
        this.name = name;
        connection.query(`SELECT COUNT(*)
        FROM information_schema.tables 
        WHERE table_schema = DATABASE()
        AND table_name = "${this.name}";`,(e, r, f) =>{
         
           if (r[0]!==1){
               connection.query(createTableQuery)
           }
        })

        
    }
    add (elementValues){
        connection.query(`INSERT INTO ${this.name} VALUES (DEFAULT,${elementValues})`,(e, r, f) =>{
        //    console.log(e, r, f)
        })
    }
    getData = (passresult) =>{
        

        connection.query(`SELECT * FROM ${this.name}`, (e, r, f) =>{
          
            passresult(e, r, f)
        });


    }

}
class User extends Table{
    constructor(){
        super("User", "CREATE TABLE User (name VARCHAR(255))")
        

    }
}
class Position extends Table{
    add (newElement) {
        super.add(
        `${newElement.name},
            ${newElement.nutrition},
            ${newElement.description},
            ${newElement.price},
            ${newElement.type},
            ${newElement.ingrediends},
            ${newElement.picture} `
        )
    }
    constructor(){
        super("Positions", `CREATE TABLE IF NOT EXISTS Positions (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            nutrition VARCHAR(255),
            description TEXT,
            price DECIMAL,
            type VARCHAR(255),
            ingrediends TEXT,
            picture TEXT
          ) `)
        

    }
}
module.exports.Position=new Position();