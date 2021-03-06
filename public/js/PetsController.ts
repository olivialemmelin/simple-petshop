namespace App {
    export class PetsController {
        static $inject = ['$http', '$state', 'PetService'];

        private httpService;
        private stateService;
        private petService;

        public petList;
        public newPet;
        public name;
        public category;
        public breed;
        public adoptionPrice;
        public currentPet;
        public imageUrl;



        constructor ($http: angular.IHttpService,
            $state: angular.ui.IState,
            petService: App.PetService
        ) {
            this.httpService = $http;
            this.stateService = $state;
            this.petService = petService;

            console.log ('test:', this.stateService);

            this.petList = [];
            this.newPet = {};

            this.getPetList ();

        }

        public getPetList () {
            console.log ('here');
            this.petService.getPetList ()
            .success ((response) => {
                console.log ('Test data: ', response);
                this.petList = response;
            })
            .error ((response) => {
            })
        }

        public getPets (id) {
            console.log ('here');
            this.petService.getPets (id)
                .success ((response) => {
                })
                .error ((response) => {
                    console.log ('There was an error')
                })
        }

        public getPetsById (id) {
            console.log ('here');
            this.petService.getPetsById (id)
            .success ((response) =>{
                console.log ('Test data: ', response);
                this.currentPet = response [0];
            })
            .error ((response)=>{
            })
        }

        public save (id) {
            console.log ('name: ', this.name);
            console.log ('category: ', this.category);
            console.log ('breed: ', this.breed);
            console.log ('adoptionPrice: ', this.adoptionPrice);

            this.petService.save ({
                name: this.name,
                category: this.category,
                breed: this.breed,
                adoptionPrice: this.adoptionPrice,
                imageUrl: this.imageUrl
            })
            .success ((response) => {
                console.log ('Test data: ', response);
                this.stateService.reload ()
            })
            .error ((response) =>{
            })
        }

        public deletePet (id) {
            console.log ('Deleted!', + id)

            this.petService.deletePet (id)
            .success ((response) => {
                console.log ('Pet Deleted Successfully', response);
                this.stateService.reload ()
            })
            .error ((response) => {
                console.log ('Error Deleting Pet', response);
            })
    }

        public editPet (petId) {
            console.log ('pet id: ' + petId);

            this.stateService.go ('pets-edit',
                {
                    id: petId
                }
            );

        }
    }
}
