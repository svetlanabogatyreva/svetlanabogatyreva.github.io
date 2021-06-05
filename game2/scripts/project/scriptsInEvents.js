"use strict";



{
	const scriptsInEvents = {

		async Leveleventsheet_Event17_Act1(runtime, localVars)
		{
			platformProvider.showInterstitial()
		},

		async Menueventsheet_Event21_Act2(runtime, localVars)
		{
			platformProvider.share()
		},

		async Menueventsheet_Event22_Act2(runtime, localVars)
		{
			let options = {
				message: 'Группа игры',
				link: 'https://vk.com/bogatyreva.space'
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
