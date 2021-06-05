"use strict";



{
	const scriptsInEvents = {

		async Leveleventsheet_Event17_Act1(runtime, localVars)
		{
			platformProvider.showInterstitial()
		},

		async Menueventsheet_Event22_Act2(runtime, localVars)
		{
			let options = {
				message: 'Я нашел маму ФИНО, а ты сможешь? Попробуй здесь:',
				link: 'https://vk.com/app7870346'
			}
			platformProvider.share(options)
		},

		async Menueventsheet_Event23_Act1(runtime, localVars)
		{
			platformProvider.addToFavorites()
		}

	};
	
	self.C3.ScriptsInEvents = scriptsInEvents;
}
