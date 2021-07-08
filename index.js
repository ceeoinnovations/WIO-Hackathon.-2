
import MainPage from './components/MainPage.js';
import ProjectPage from './components/ProjectPage.js';
import Navbar from './components/Navbar.js';



Promise.all([
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vRnOBYNF9b2teXMuj2hTt_JxJ0re42D0k0bkb8IZJjTVDxtg23yjwzIBtCJa-jxPg/pub?output=csv"),
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vTfAVP2gfgL3kfr9OZsTFt3qsLLECbCZsJw9JtJOsBIm-SOSKZzhEcrCF-FuHZ67w/pub?output=csv")
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



