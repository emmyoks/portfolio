       
const navVm = new Vue({
    el: '#nav',
    data:{
        hide:'',
        navItems: {
            "#up":"Home",
            "#about-me":"About",
            "#services":"Services",
            "#my-skills":"My Skills",
            "#projects":"Projects",
            "#contact":"Contact Me"
        }
    },
    methods:{
        toggleNav: function(){
            this.hide ? this.hide = '' : this.hide = 'show-nav'
        }
    }
})

const projectVm = new Vue({
    el: '#projects',
    data:{
        
        projects: {
            "budget app":"https://mebudget.netlify.app/",
            "todo app":"https://todoapp-withvuejs.netlify.app/",
            "randomising app":"https://randup.netlify.app/",
            "weather app":"https://weatherw.netlify.app/"
        }
    }
})

const socialVm = new Vue({
    el: '#social',
    data:{      
        socials: {
            'github':'https://github.com/emmyoks',
            'twitter':'https://twitter.com/Meetemmyoks',
            'linkedin':'https://www.linkedin.com/in/emmanuel-obasanmi-6a14351b1'

        }
    }
})
const contactvm = new Vue({
    el: '#contact',
    data:{
        
        socials: {
            'github':'https://github.com/emmyoks',
            'twitter':'https://twitter.com/Meetemmyoks',
            'linkedin':'https://www.linkedin.com/in/emmanuel-obasanmi-6a14351b1'

        }
    }
})


AOS.init({
    easing: 'ease-in-out-sine'
    }); 