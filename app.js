       
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
        
        form: {
            'name':'',
            'email':'',
            'message':''
        },
        socials: {
            'github':'https://github.com/emmyoks',
            'twitter':'https://twitter.com/Meetemmyoks',
            'linkedin':'https://www.linkedin.com/in/emmanuel-obasanmi-6a14351b1'

        }
    },
    methods:{
        sendForm:function(){
            console.log("on it right now")
            const FD = new FormData();
            Object.entries(this.form).forEach(([key,value])=> {
                FD.append(key, value)
            })

            console.log(this.form.name)
            const link = "https://script.google.com/macros/s/AKfycbxL18Dhnr48O7Wpxp-C3NZwgdECsk-VgEwQGwCt/exec";
        
            axios.post(link,FD)
            .then(res=>{
                swal({
                    title: "",
                    text: "Hey"+this.form.name+"Thanks for reaching out, I'll get back to you as soon as possible.",
                    icon: "success",
                    });
            })
            .catch(err=>{
                swal({
                    title: "",
                    text: err+", you can reach us through Gmail, Github, Twitter and Linkedin.",
                    icon: "error",
                  });
            })
        }
    }
})


AOS.init({
    easing: 'ease-in-out-sine'
    }); 