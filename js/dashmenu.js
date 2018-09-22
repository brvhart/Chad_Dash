// DASH MENU COMPONENT

'use strict';

var menu = {
    title: 'AWAY',
    menus: [
    {
      title: 'Add Section ',
      link: 'addsection.html',
      
      isActive: true
    },
    {
      title: 'Edit Sections',
      link: 'editsections.html',
      
      isActive: false

    },
    {
      title: 'Move Sections',
      link: 'movesections.html',
      
      isActive: false

    },
    ]

}


Vue.component('dash-menu', {
  template: `<div class="dash-menu">
              
              <ul v-if="menus.length">
                <li v-for="menu in menus">
                  <a :href="menu.link" v-bind:class="{ active: menu.isActive }">
                    {{ menu.title }}
                    <i :class="menu.icon"></i>
                  </a>
                </li>
              </ul>




              
              <h3>{{ title }}</h3>
            </div>
            `,
  data: function() {
    return menu;
  }
})

var dashMenu = new Vue({
  el: '#dashmenu'
})