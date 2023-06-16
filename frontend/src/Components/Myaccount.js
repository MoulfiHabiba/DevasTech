import { React,useState,useEffect } from "react";

import { Link , useLocation, useNavigate} from 'react-router-dom';


/*const myAccount = () => {

return(

    <div>
        {/* Showing the personal information }
{/* Modifing the personal information *}
{/* Display his pictures + his stoies *}
{/* logOut*}
{/* Modifing the personal information *}

    </div>
)


}

export default myAccount;*/
function MyAccount () {

	let pattern = /^[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~ ]*$/g;
	const [Name, setName ] = useState("")
	const [LastName, setLastName ] = useState("")
	const [Phone, setPhone ] = useState("")
	const [Mail, setMail ] = useState("")
	const [Adresse, setAdresse ] = useState("")
	const [ChEff, setChEff] = useState(false)
	const [Validate, setValidate] = useState(false)
	const [Res, setRes] = useState(false)






	
 let [wilaya, setWilaya] = useState({});
 let [commune, setCommune] = useState({});

 const [wilaya1, setWilaya1] = useState({});
 const [commune1, setCommune1] = useState({});

 
 //links the variable sent from the login page with ou variable:
 
/*
 useEffect(() => {
	 const isAuthenticated = localStorage.getItem("isAuthenticated");
	 if(isAuthenticated){
		const json = localStorage.getItem("profile1");
		const profile1 = JSON.parse(json);
		if (profile1) {
			console.log('profile1: ', profile1);
			profile=profile1; 
			setProfile(profile);
			console.log('profile_account: ', profile_account);
		}
		 
		 console.log("in my account: ", profile_account);
		 console.log('userId:' , profile_account.userId);
		 console.log("in my account: ", profile_account.email);
		 console.log('profile wilaya: ', profile_account.wilaya);

		 if (profile_account.userId === "undefined")
		 {/*
			API.get(`/users/`).then(res => {

				console.log('profile email: ', profile.email);
				setList(res.data);
				console.log('list: ', list);
			})
			
		 }

		 
/*
		 API.get(`wilayas/${profile_account.wilaya}`).then(res => {
			 wilaya = res.data;
			 setWilaya1(wilaya);
			 console.log('wilaya: ', wilaya, wilaya.nom, ' hi');
			 console.log('wilaya1: ',wilaya1);
		 });	
		 API.get(`communes/${profile_account.commune}`).then((res) => {
			 commune = res.data;
			 setCommune1(commune);
			 console.log('commune: ', commune, commune.nom, ' hi2');
			 
		 });
		 
	 }else{
		toast.error("veuillez-vous connecter d'abord à votre compte pour pouvoir y acceder");
		 navigate('/login');
	 }

 }, []);
*/
/*
	const ModifProfil = (e) => {
		e.preventDefault();
		//let UserId = 1 ;
		
	  if(ChEff)
		{API.patch(`/users/${profile_account.userId}/`,{
			
				"nom":LastName,
				"prenom":Name,
				"phone":Phone,
				"adresse":Adresse,
			
		  }, 
			)
			  .then((response) => {
				if(Validate){
				//	console.log(Valide);
				console.log(response);
				toast.success("Changment effectuer avec succes");
				setChEff(false)}
				else{
					//console.log(Validate);
					toast.error("veuillez verifier la validite de votre numero telephone");
				}
			  })
			  .catch((error) => {
				console.log(error.response);
			  });}
		
	  };
*/
    return(
     <div className="liton__wishlist-area pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* PRODUCT TAB AREA START */}
            <div className="ltn__product-tab-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="ltn__tab-menu-list mb-50">
                      <div className="nav">                                            
                      <a className="active show" data-bs-toggle="tab" href="#ltn_tab_1_1">Tableau de bord <i className="fas fa-home" /></a>
                        <a data-bs-toggle="tab" href="#ltn_tab_1_2">Mon profil <i className="fas fa-user" /></a>
                        <a data-bs-toggle="tab" href="#ltn_tab_1_9">Modifier les informations personnelles <i className="fas fa-user" /></a>
                        <a data-bs-toggle="tab" href="#ltn_tab_1_5">Mes Annonces <i className="fa-solid fa-list" /></a>
                        <a data-bs-toggle="tab" href="#ltn_tab_1_3">Messages d'offres<i className="fa-solid fa-money-check-dollar" /></a>
						<div>
							<a data-bs-toggle="tab" href="#ltn_tab_1_9">
								
										<div className="theme-btn-1 btn black-btn" >
												Log out
										</div>
								
								<i className="fas fa-sign-out-alt" />
							</a>
						</div>
					  </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="tab-content">
                    <div className="tab-pane fade active show" id="ltn_tab_1_1">
                      <div className="ltn__myaccount-tab-content-inner">
                        <p>Bonjour <strong>{Name+" "+ LastName} </strong></p>
                        <p>A partir de tableau de bord de votre compte vous pouvez:  <ul> <li><span>Voir vos Annonces</span></li> <li><span>Modifier vos coordonnées personnelles</span></li>  <li><span>Consulter La listes des annonces favoris</span></li><li><span>Consulter les messages d'offres </span></li>{/*to add the others if they're done*/}</ul></p>
                      </div>
                    </div>
                      
                    <div className="tab-pane fade" id="ltn_tab_1_2">
						<div className="ltn__myaccount-tab-content-inner">
						  {/* comment-area */}
						  <div className="ltn__comment-area mb-50">
							<div className="ltn-author-introducing clearfix">
							<div className="author-img">
								
							  </div>
							  <div className="author-info">
								
								<h2>{Name} {LastName}</h2>
								<div className="footer-address">
								  <ul>
									<li>
									  <div className="footer-address-icon">
										<i className="icon-placeholder" />
									  </div>
									  <div className="footer-address-info">
										<p>{Adresse}</p>
									  </div>
									</li>
									<li>
									  <div className="footer-address-icon">
										<i className="icon-call" />
									  </div>
									  <div className="footer-address-info">
										<p><a href="tel:+0123-456789">{Phone}</a></p>
									  </div>
									</li>
									<li>
									  <div className="footer-address-icon">
										<i className="icon-mail" />
									  </div>
									  <div className="footer-address-info">
										<p><a href="mailto:example@example.com"> {Mail} </a></p>
									  </div>
									</li>
								  </ul>
								</div>
							  </div>
							</div>
							
							  
						  </div>
						</div>
					  </div>

            <div className="tab-pane fade" id="ltn_tab_1_4">
						<div className="ltn__myaccount-tab-content-inner">
						  <div className="ltn__form-box">
							<form action="#">
							
							  
							  <div className="col-md-6">
										  <div className="input-item input-item-name ltn__custom-icon">
										  <input rows="2" cols="5" 
                        onChange={((e) => {setName(e.target.value); setChEff(true)})  }
                        placeholder= {'Le prenom'}
                        defaultValue={Name}
                      />
										  </div>
										</div>
										<div className="col-md-6">
										  <div className="input-item input-item-name ltn__custom-icon">
										  <input rows="2" cols="5" 
                        onChange={((e) => {setLastName(e.target.value); setChEff(true)})}
                        placeholder={"Le nom"}
                        defaultValue={LastName}
						
                      />
										  </div>
										</div>
										<div className="col-md-6">
										  <div className="input-item input-item-name ">
										  <input rows="2" cols="5" 
                        onChange={((e) => {setAdresse(e.target.value);setChEff(true)})}
                        placeholder={"l'adresse"}
                        defaultValue={Adresse}
                      />
										  </div>
										</div>
										
										<div className="col-md-6">
										  <div className="input-item input-item-phone ltn__custom-icon">
										  <input rows="2" cols="5" 
                        onChange={((e) => {setPhone(e.target.value);setChEff(true)})}
                        placeholder={"Numéro de téléphone"}
                        defaultValue={Phone}
                      />
										  </div>
										</div>
										<div className="btn-wrapper">
										<a data-bs-toggle="tab" href="#ltn_tab_1_2">
								<button 
								
								className="btn theme-btn-1 btn-effect-1 text-uppercase">Save Changes</button></a>
								
								
							  </div>
						
							  </form>
							 
							 
							
						  </div>
						</div>
					  </div>
					  <div className="tab-pane fade" id="ltn_tab_1_9">
						<div className="ltn__myaccount-tab-content-inner">
						
						  <div className="ltn__form-box">
							<form action="#">
							  <div className="row mb-50">
								<div className="col-md-6">
								  <label>Nom:</label>
								  <input type="text"  onChange={((e) => {setLastName(e.target.value); setChEff(true)})}
                        placeholder={"Le nom"}
                        defaultValue={LastName}
						 />
								</div>
								<div className="col-md-6">
								  <label>Prenom: </label>
								  <input type="text" onChange={((e) => {setName(e.target.value); setChEff(true)})  }
                        placeholder= {'Le prenom'}
                        defaultValue={Name}
						 />
								</div>
								<div className="col-md-6">
								  <label>L'adresse:</label>
								  <input type="text"  onChange={((e) => {setAdresse(e.target.value);setChEff(true)})}
                        placeholder={"l'adresse"}
                        defaultValue={Adresse} />
								</div>
								<div className="col-md-6">
								  <label>Numéro de téléphone</label>
								  <input type="text"  
                        placeholder={"Numéro de téléphone:"}
                        defaultValue={Phone} />
								</div>
							  </div>
							  
							  <div className="btn-wrapper">
										<a data-bs-toggle="tab" href="#ltn_tab_1_2">
								<button 
								
								className="btn theme-btn-1 btn-effect-1 text-uppercase">Save Changes</button></a>
							
								
							  </div>
							</form>
						  </div>
						</div>
					  </div>

            <div className="tab-pane fade" id="ltn_tab_1_3">
                     
					
						</div>
                      <div className="tab-pane fade" id="ltn_tab_1_5">
                        <div className="ltn__myaccount-tab-content-inner">
                          <div className="ltn__my-properties-table table-responsive">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th scope="col">Mes Annonces</th>
                                  <th scope="col" />
                                  <th scope="col">Prix</th>
                                  <th scope="col">Supprimer</th>
                                </tr>
                              </thead>
                              <tbody>
                          
                              </tbody>
                            </table>
                          </div>
                        
                        </div>
                        </div>
                      </div>
                      
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* PRODUCT TAB AREA END */}
          </div>
        </div>
      
    </div>
    
    )
}

export default MyAccount;