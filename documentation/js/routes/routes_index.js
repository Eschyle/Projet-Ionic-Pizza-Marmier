var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","redirectTo":"home","pathMatch":"full"},{"path":"home","loadChildren":"./pages/home/home.module#HomePageModule","children":[{"kind":"module","children":[],"module":"HomePageModule"}]},{"path":"home/pizza-detail/:id","loadChildren":"./pages/pizza-detail/pizza-detail.module#PizzaDetailPageModule","children":[{"kind":"module","children":[],"module":"PizzaDetailPageModule"}]},{"path":"cart","loadChildren":"./pages/cart/cart.module#CartPageModule"},{"path":"admin-profil","loadChildren":"./pages/admin-profil/admin-profil.module#AdminProfilPageModule","children":[{"kind":"module","children":[],"module":"AdminProfilPageModule"}]},{"path":"edit-ingredient","loadChildren":"./pages/admin-profil/edit-ingredient/edit-ingredient.module#EditIngredientPageModule","children":[{"kind":"module","children":[],"module":"EditIngredientPageModule"}]},{"path":"edit-pizza","loadChildren":"./pages/admin-profil/edit-pizza/edit-pizza.module#EditPizzaPageModule","children":[{"kind":"module","children":[],"module":"EditPizzaPageModule"}]}],"kind":"module"}]}
