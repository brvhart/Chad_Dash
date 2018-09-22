// LOG IN COMPONENT

'use strict'

Vue.component('side-bar', {
    template: `      
                <div class="sideBarMenu">
 
                   

                    <nav id="navBar" role="navigation">

                      <div id="menuToggle">

                        <input type="checkbox" />


                        <span></span>
                        <span></span>
                        <span></span>


                        <ul id="menu">

                        
                            
                                            
                            <li>

                                <i id="menuIcon" class="fa fa-tachometer" aria-hidden="true"></i>

                                <a href="dashboard.html">Dashboard</a>

                            </li>

                           
                            <li>

                                <i id="menuIcon" class="fa fa-users" aria-hidden="true"></i>

                                <a href="#">Social Impact</a>

                            </li>

                             

                            <li>
                            

                                <i id="menuIcon" class="fas fa-chart-area" aria-hidden="true"></i>

                                <a href="#">Data & Analytics</a>

                            </li>

                            <div class="profile-links">
                                  <ul>
                                    <a href="#" class="btn"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#" class="btn"><i class="fab fa-twitter"></i></a>
                                    <a href="#" class="btn"><i class="fa fa-envelope"></i></a>

                                  </ul>
                            </div>

                          

                            <li>

                                <i id="menuIcon" class="fas fa-sign-out-alt" aria-hidden="true"></i>

                                <a href="index.html">Log Out</a>

                            </li>





                            <div class= "menuBtn">
                                <li>


                                    <button id="homeBtn">Home Mode</button>

                                </li>

                            
                                <li>

                                    <button id="awayBtn">Away Mode</button>

                                </li>
                            </div>

                        </ul>

                      </div>

                    </nav>

                </div>

              `,
});

var logIn = new Vue({
    el: '#sideBarMenu'
})


