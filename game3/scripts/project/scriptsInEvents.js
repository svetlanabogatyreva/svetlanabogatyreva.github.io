"use strict";



{
	const scriptsInEvents = {

		async QuizEvents_Event19_Act8(runtime, localVars)
		{
			platformProvider.showInterstitial()
		},

		async StartEvents_Event3_Act1(runtime, localVars)
		{
			let options = {
				message: 'Космос тест. Кто ты? 😎 Знаток или новичок?',
				link: 'https://vk.com/app7882145'
			}
			platformProvider.share(options)
		},

		async StartEvents_Event4_Act1(runtime, localVars)
		{
			platformProvider.addToFavorites()
		}

	};
	
	self.C3.ScriptsInEvents = scriptsInEvents;
}
