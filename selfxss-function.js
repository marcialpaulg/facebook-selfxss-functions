/*
	javascript functions below are made by Marcial Paul G. (im.codename@gmail.com) 
	for educational purposes.
*/

// follow facebook profile
function follow(id){
	// credits to Marcial Paul G.
	return new AsyncRequest('/ajax/follow/follow_profile.php?__pc=EXP1%3ADEFAULT').setData({
		profile_id: id,
		location: 1,
		feed_blacklist_action: 'show_followee_on_follow'
	}).send();
}

// like facebook page
function like_page(id){
	// credits to Marcial Paul G.
	return new AsyncRequest('/ajax/pages/fan_status.php?__pc=EXP1%3ADEFAULT').setData({
		fbpage_id: id,
		add: true,
		reload: false,
		fan_origin: 'page_timeline',
		fan_source: '',
		cat: '',
		actor_id: '',
	}).send();
}

// add facebook profile as a friend
function add_friend(id){
	// credits to Marcial Paul G.
	return new AsyncRequest('/ajax/add_friend/action.php?__pc=EXP1%3ADEFAULT').setData({
		to_friend: id,
		action: 'add_friend',
		how_found: 'profile_button',
		ref_param: 'nf',
		link_data: {
			gt: {
				profile_owner: id,
				ref: 'timeline:timeline'
			}
		},
		outgoing_id: 'js_6r',
		logging_location: '',
		no_flyout_on_click: true,
		ego_log_data: '',
		http_referer: 'https://www.facebook.com/mL.4o4?fref=nf',
		floc: 'profile_button',
		frefs: ['nf']
	}).send();
}
