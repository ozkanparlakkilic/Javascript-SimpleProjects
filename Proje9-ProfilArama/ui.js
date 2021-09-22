
class UI{
    constructor(){
        this.profileContainer = document.querySelector('#profileContainer');
        this.alert = document.querySelector('#alert');
    }

    showProfile(profile){
        this.profileContainer.innerHTML = `
            <div class="card card-body">
                <div class="row">
                    <div class="col-md-3">    
                        <img src="http://placehold.it/350x150" class="img-thumbnail">
                    </div>
                    <div class="col-md-9">
                        <h4>Contact</h4>
                        <ul class="list-group">
                            <li class="list-group-item"> name : ${profile.name}</li>
                            <li class="list-group-item"> username : ${profile.username}</li>
                            <li class="list-group-item"> email : ${profile.email}</li>
                            <li class="list-group-item"> 
                                address : ${profile.address.street}
                                ${profile.address.suite}
                                ${profile.address.city}
                                ${profile.address.zipcode}
                            </li>
                            <li class="list-group-item"> phone : ${profile.phone}</li>
                            <li class="list-group-item"> email : ${profile.email}</li>
                            <li class="list-group-item"> company : ${profile.company.name}</li>
                        </ul>
                        <h4 class=mt-4 mb-2>Todo list</h4>
                        <ul id="todo" class="list-group">
                            
                        </ul>
                    </div>
                </div>
            
            </div>
        
        `;
    }

    showTodo(todo){
        let html = "";

        todo.forEach(item => {
            if(item.completed){
                html += `
                    <li class="list-group-item bg-success"> name : ${item.title}</li>
                `;
            }else{
                html += `
                    <li class="list-group-item bg-secondary"> name : ${item.title}</li>
                `;
            }
        });

        this.profileContainer.querySelector('#todo').innerHTML = html;
    }

    showAlert(text){
        this.alert.innerHTML = `${text} is not found`;
    }

    clear(){
        this.alert.innerHTML = "";
        this.profileContainer.innerHTML = "";
    }
}