
import MainPage from './components/MainPage.js';
import ProjectPage from './components/ProjectPage.js';
import Navbar from './components/Navbar.js';



Promise.all([
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vS6pRmAyjfNlTXNW6GXbMNtGFXGhw5jOUVfZc_W9hB6bCa1upAMW6osiy4rzw_KqpmLj8iRpn_8dt4a/pub?output=csv"),
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vTYzz7aMMCso1_1YGZlfoWbWBrKFfEtkpuBK3Jdfg5rcU9Ma-btLs2StKhGVJ3-py8VT60PKRCxdUJT/pub?output=csv")
      ])
      .then(([about, projects]) => {
        const data = {about, projects};
        console.log(data);

    // determine what page to render
    let params = new URLSearchParams(window.location.search);
    if (params.get('project')==null){
        MainPage(data);
    }else{
        let project = data.projects.find(d=>d.title===params.get('project'));
        Navbar('project')
        ProjectPage(project, about);
    }    
});



