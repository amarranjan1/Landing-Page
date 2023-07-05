
// selector variable for nav item
const itemNavBar = document.querySelector('#item_nav_bar');

//section variable
const sections = document.querySelectorAll('section');

//buttom nav variable 
const button = document.querySelector('#button_up_nav');

//bottom to up nav buttom implimentation

const displayButton = () => {
    window.addEventListener('scroll', () => {
      console.log(window.scrollY);
    
      if (window.scrollY > 100) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    });
  };
  
  const scrollToTop = () => {
    button.addEventListener("click", () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      }); 
      console.log(event);
    });
  };
  
  // call function for scroll
  displayButton();
  scrollToTop();

// create and set nav screen
function setScreenNav() {
    const fragment = document.createDocumentFragment();

    sections.forEach((navSection) => {
        const liTag = document.createElement('li');
        const aTag = document.createElement('a');
        aTag.innerText = navSection.getAttribute('data-nav');
        aTag.setAttribute('class', 'nav_select_item');

        // scroll to anchor ID using scroll to event
        aTag.addEventListener("click", () => {
            navSection.scrollIntoView({behavior: "smooth"});
            });
        liTag.appendChild(aTag);
        fragment.appendChild(liTag);
    });
    itemNavBar.appendChild(fragment);
};


//function implimentation for activie visible section
function setActSec(){
    visSecInd = getVisSecInd();
    if(visSecInd != -1){
        let navATagList = document.querySelectorAll('.nav_select_item');
        for (let i = 0; i < sections.length; i++) {
            if (i == visSecInd){
                sections[i].classList.add('sec_act');
                navATagList[i].classList.add('sec_act');
            }
            else{
                sections[i].classList.remove('sec_act');
                navATagList[i].classList.remove('sec_act');
            }
        }; 
    };
}

// call set screen nav
setScreenNav();

// add event listner to active screen
document.addEventListener('scroll', setActSec);

function getVisSecInd() {
  let minor = window.innerHeight;
  visSecInd = -1;

  sections.forEach((navSection, index) => {
      let offset = navSection.getBoundingClientRect();
      if(Math.abs(offset.top) < minor){
          minor = Math.abs(offset.top);
          visSecInd = index;
      }
  });
  return visSecInd;
}