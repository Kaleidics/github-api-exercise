function testApi(name) {
    return fetch(`https://api.github.com/users/${name}/repos`)
        .then(response => response.json())
        .then(function (responseJson) {
            for (i = 0; i < responseJson.length; i++) {
                $(".repo-list").append(`<li>${responseJson[i].full_name}</i>`);
                $(".repo-list").append(`<a href="${responseJson[i].html_url}">${responseJson[i].html_url}</a>`);
            }
        })
        .catch(error => console.log("error happened"));
}


function searchGithub(){
    $(".search").on("submit", function(event){
        event.preventDefault();
        $(".repo-list").empty();
        console.log("search value",$(".github-name").val());
        let repoName =  $(".github-name").val();
        testApi(repoName);
        
    });
}

function documentReady(){
    console.log("active");
    searchGithub();
    
}
$(documentReady);