let MovieObject = {

    getall: function(){
        alert("오늘의 영화 추천");
        $.ajax({
            type: "GET",
            url: "http://localhost:8000/all/"

        }).done(function(response){
            console.log(response.result);
            let movielist = response.result;

            // let topdiv = document.createElement("div");
            // topdiv.className = "row row-cols-2 row-cols-md-5 g-4";
            // document.body.appendChild(topdiv);
            topdiv = document.getElementById("alldiv")

            for (let i = 0; i < 10; i++) {
                let cmovie = document.createElement("div");
                cmovie.className = "card";
                cmovie.style.width = "18rem";

                let mimg = document.createElement("img");
                mimg.className = "card-img-top";
                mimg.src = movielist[i].poster_path;
                mimg.alt = movielist[i].title;

                let cardBody = document.createElement("div");
                cardBody.className = "card-body";

                let cardTitle = document.createElement("h5");
                cardTitle.className = "card-title";
                cardTitle.textContent = movielist[i].title;

                let cardText = document.createElement("p");
                cardText.className = "card-text";
                cardText.textContent = movielist[i].overview;

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);

                cmovie.appendChild(mimg);
                cmovie.appendChild(cardBody);

                topdiv.appendChild(cmovie);

                // 추가된 부분: 각 포스터를 클릭했을 때 이동할 URL 설정
                let url = movielist[i].url

                // 포스터를 클릭하면 해당 URL로 이동하는 이벤트 추가
                mimg.addEventListener("click", function() {
                    window.location.href = url
                })
                cmovie.appendChild(mimg)
                topdiv.appendChild(cmovie)
            }
        }).fail(function() {
            console.error("영화 목록을 불러오지 못했습니다.");
        });
    },
// -----------------------------------------------------------------------------------------------

    getitems: function(){
        // alert("장르추천")

        // genre = document.getElementById("sgenre").value
            $.ajax({
                type: "GET",
                url: "http://localhost:8000/item-based/" + "12"
    
            }).done(function(response){
                console.log(response.result);
                movielist = response.result;
                console.log(movielist[0].title)
    
                topdiv = document.getElementById("itemdiv")
                topdiv.innerHTML = ""
    
                for (let i = 0; i < 10; i++) {
                    let cmovie = document.createElement("div");
                    cmovie.className = "card";
                    cmovie.style.width = "18rem";
    
                    let mimg = document.createElement("img");
                    mimg.className = "card-img-top";
                    mimg.src = movielist[i].poster_path;
                    mimg.alt = movielist[i].title;
    
                    let cardBody = document.createElement("div");
                    cardBody.className = "card-body";
    
                    let cardTitle = document.createElement("h5");
                    cardTitle.className = "card-title";
                    cardTitle.textContent = movielist[i].title;
    
                    let cardText = document.createElement("p");
                    cardText.className = "card-text";
                    cardText.textContent = movielist[i].overview;
    
                    cardBody.appendChild(cardTitle);
                    cardBody.appendChild(cardText);
    
                    cmovie.appendChild(mimg);
                    cmovie.appendChild(cardBody);
    
                    topdiv.appendChild(cmovie);
    
                    // 추가된 부분: 각 포스터를 클릭했을 때 이동할 URL 설정
                    let url = movielist[i].url
    
                    // 포스터를 클릭하면 해당 URL로 이동하는 이벤트 추가
                    mimg.addEventListener("click", function() {
                        window.location.href = url
                    })
    
                    cmovie.appendChild(mimg)
                    topdiv.appendChild(cmovie)
    
                    
    
                }
            }).fail(function() {
                console.error("영화 목록을 불러오지 못했습니다.");
            });
        },
    }
    

MovieObject.getall();