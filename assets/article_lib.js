// Créer une section

function addSection(
	/*Le nom de la section*/section_name,
	/*Le parent de la section Exemple le <body>*/parent,
	/*Optionnel class de la section*/css_class,
	/*Optionnel la class du sub_container*/sub_container_class,
	/*Optionnel l'id du sub_container*/sub_container_id
	){
	// Le container (<div class="section_container">)
	var container = document.createElement("div");
	// Le sub_container (<div class="sub_container">)
	var sub_container = document.createElement("div");
	// Attribution de la classe ("section_container")
	container.setAttribute("class", "section_container");
	// La section en elle même
	var section = document.createElement("div");
	// Vérification des classes
	if (css_class != undefined) {
		section.setAttribute("class", css_class);
	}
	if (sub_container_class != undefined) {
		sub_container.setAttribute("class", sub_container_class);
	}
	if (sub_container_id != undefined) {
		sub_container.setAttribute("id", sub_container_id);
	}

	// Attribution de l'id + Mise en place des parents
	section.setAttribute("id", section_name);
	section.appendChild(sub_container);
	container.appendChild(section);
	parent.appendChild(container);
}

// Ajouter un titre à la section

function addTitleToSection(
	/*Element de section*/section,
	/*Titre*/title_arg,
	/*Optionnel id du <div>*/div_id,
	/*Optionnel class du <div>*/div_class,
	/*Optionnel class du <p>*/title_class
	){
	//Le <div> du <p>
	var div = document.createElement("div");
	//L'element <p>
	var title = document.createElement("p");
	//Le TextNode (que l'on va ajouter au <p>)
	var text = document.createTextNode(title_arg);
	//Vérification des classes
	if (title_class != undefined) {
		// Ajout de l'attribut au <p>
		title.setAttribute("class", title_class);
	}
	if (div_class != undefined) {
		// Ajout de l'attribut au <div>
		div.setAttribute("class", div_class);
	}
	//Mise en place de l'id
	div.setAttribute("id", div_id);
	//Mise en place des parents
	title.appendChild(text);
	div.appendChild(title);
	section.parentNode.insertBefore(div, section);

}

// Ajouter un article a la section

function addArticleToSection(
	/*Requis La section où ajouter l'article*/section_id,
	/*Optionnel class de l'article*/article_class,
	/*Optionnel id de l'article*/article_id
	){
	// Le nom de l'article
	let section = getById(section_id);
	var article_div = document.createElement("div");
	
	if (article_class != undefined) {
		article_div.setAttribute("class", article_class);
	}
	if (article_id != undefined) {
		article_div.setAttribute("id", article_id);
	}

	section.appendChild(article_div);
}

//Ajouter un titre a l'article

function addTitleToArticle(
	/*Requis l'article*/article_id,
	/*Requis Le nom de l'article*/name,
	/*Optionnel La class du <div> du nom de l'article*/name_div_class,
	/*Optionnel L'id du <div> du nom de l'article*/name_div_id,
	/*Optionnel La class du <p> du nom de l'article*/name_p_class,
	/*Optionnel L'id du <p> du nom de l'article*/name_p_id
	){

	//Définition des variables
	let article = getById(article_id);
	var name_div_elem = document.createElement("div");
	var name_p_elem = document.createElement("p");

	//Mise en place des classes et id si ils sont définis
	if (name_div_class != undefined) {
		name_div_elem.setAttribute("class", name_div_class);
	}
	if (name_div_id != undefined) {
		name_div_elem.setAttribute("id", name_div_id);
	}
	if (name_p_class != undefined) {
		name_p_elem.setAttribute("class", name_p_class);
	}
	if (name_p_id != undefined) {
		name_p_elem.setAttribute("id", name_p_id);
	}

	//Mise en place du text
	name_p_elem.innerHTML = name;

	//Mise en place des parrents
	name_div_elem.appendChild(name_p_elem);
	article.appendChild(name_div_elem);
}

// Ajouter une image à l'article

function addImageToArticle(
	/*Requis L'id de l'article*/article_id,
	/*Requis La source de l'image*/img_src,
	/*Requis Le width de l'image*/img_width,
	/*Requis Le height de l'image*/img_height,
	/*Optionnel La classe de l'image*/img_class,
	/*Optionnel L'id de l'image*/img_id,
	/*Optionnel La classe du <div>*/div_class,
	/*Optionnel L'id du <div>*/div_id
	){
	// Définition des variables
	let article = getById(article_id);
	var img_container = document.createElement("div");
	var img = document.createElement("img");

	// Mise en place des attributs
	img.setAttribute("src", img_src);
	img.setAttribute("width", img_width);
	img.setAttribute("height", img_height);

	// Mise en place des attributs si définis
	addClassAndId(img, img_class, img_id)
	addClassAndId(img_container, div_class, div_id)

	// Mise en place des parents
	img_container.appendChild(img);
	article.appendChild(img_container);
}

function addButtonToArticle(
	/*Requis L'id de l'article*/article_id,
	/*Requis Le text du boutton*/button_text,
	/*Requis Le href du button*/button_url,
	/*Optionnel La class du <a>*/button_text_class,
	/*Optionnel L'id du <a>*/button_text_id,
	/*Optionnel La class du <div>*/button_container_class,
	/*Optionnel L'id du <div>*/button_container_id
	){
	//Définition des variables
	let article = getById(article_id);
	var button_container = document.createElement("div");
	var button = document.createElement("a");
	var text = document.createTextNode(button_text);

	// Mise en place des attributs
	button.setAttribute("href", button_url);

	// Mise en place des attributs si défini

	addClassAndId(button, button_text_class, button_text_id)
	addClassAndId(button_container, button_container_class, button_container_id)

	// Mise en place des parents
	article.appendChild(button_container);
	button_container.appendChild(button);
	button.appendChild(text);
}

// UTIL

function getById(id) {
	return document.getElementById(id)
}

function addClassAndId(instance, class_, id) {
	addClass(instance, class_);
	addId(instance, id)
}

function addClass(instance, class_name) {
	if (isDefined(class_name)) {
		instance.setAttribute("class", class_name)
	}
}

function addId(instance, id) {
	if (isDefined(id)) {
		instance.setAttribute("id", id)
	}
}

function isDefined(value) {
	if (value != undefined || value != null || value != 0 || value != "") {
		return true
	} else {
		return false
	}
}
