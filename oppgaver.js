            //lukk-knapp for hver oppgave i listen
            var myNodelist = document.getElementsByTagName("LI");
            var i;
            for (i = 0; i < myNodelist.length; i++) {
                var span = document.createElement("SPAN");
                var txt = document.createTextNode("\u00D7");
                span.className = "close";
                span.appendChild(txt);
                myNodelist[i].appendChild(span);
            }

            //lukk-knap funksjonalitet
            var close = document.getElementsByClassName("close");
            var i;
            for (i = 0; i < close.length; i++) {
                close[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                };
            }

            //leggger til markør for ferdige oppgaver
            var list = document.querySelector("ul");
            list.addEventListener(
                "click",
                function (ev) {
                    if (ev.target.tagName === "LI") {
                        ev.target.classList.toggle("checked");
                    }
                },
                false
            );
            //legg til knapp funksjonalitet
            function newElement() {
                var li = document.createElement("li");
                var inputValue =
                    "Oppgave: " + document.getElementById("inputItems").value;
                var t = document.createTextNode(inputValue);
                li.appendChild(t);
                if (inputValue === "") {
                    alert("Du må legge til en oppgave.");
                } else {
                    document.getElementById("minUl").appendChild(li);
                }
                document.getElementById("inputItems").value = "";

                var span = document.createElement("SPAN");
                var txt = document.createTextNode("\u00D7");
                span.className = "close";
                span.appendChild(txt);
                li.appendChild(span);

                for (i = 0; i < close.length; i++) {
                    close[i].onclick = function () {
                        var div = this.parentElement;
                        div.style.display = "none";
                    };
                }
            }