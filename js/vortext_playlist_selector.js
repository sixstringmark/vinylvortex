
// SETTINGS
var last_played_idx = -1;
var play_cycles = -1;
var current_entries = null;
var current_entry_idx = 0;

var hap_settings = {
	/* useOnlyMp3Format: true/false (set to true, and on browsers than do not support mp3, flash will be used to play mp3. Also set to true if you plan on using podcast, soundcloud, youtube, ofm) */
	useOnlyMp3Format: true,
	/* sound_id: unique string for player identification (if multiple player instances were used, then strings need to be different!) */
	sound_id: 'full_selector',
	
	/* playlistList: dom elements which holds list of playlists */
	playlistList: '#playlist_list',
	/* activePlaylist: set active playlist that will be loaded on beginning. 
	param1: hidden (boolean) true/false (visible/hidden playlist)
	param2: id (pass element 'id' from the dom)
	Leave empty for no playlist loaded at start like this: activePlaylist: '' */
	activePlaylist: {hidden: false, id: '#playlist1'},
	/* activeItem: active item to start with when playlist is loaded (0 = first, 1 = second, 2 = third... -1 = none) */
	activeItem: 0,
	
	/* autoOpenPlayerInPopup: true/false. Auto open player in popup (removes player in parent window when player in popup opens) */
	autoOpenPlayerInPopup: false,
	/* autoUpdateWindowData: true/false. Auto update data between parent window and popup window (current (last) playlist, active item, last volume) */
	autoUpdateWindowData: true,
	
	/* soundcloudApiKey: If you want to use SoundCloud music, register you own api key here for free: 
	'http://soundcloud.com/you/apps/new' and enter Client ID */
	soundcloudApiKey: '',
	/* soundcloud_result_limit: max number of results to retrieve from soundcloud. BEWARE! Some results may contain thousands of songs so keep this in mind!! */
	soundcloud_result_limit:4,
	
	/* podcast_result_limit: max number of results to retrieve from podcast. 250 = max possible results by google api feed. */
	podcast_result_limit: 3,
	/* yt_playlist_result_limit: max number of results to retrieve from youtube playlist. 200 = max amount youtube playlist can have. */
	yt_playlist_result_limit: 3,
	/* ofm_result_limit: max number of results to retrieve from official.fm. */
	ofm_result_limit: 3,

	/*defaultVolume: 0-1 (Irrelevant on ios mobile) */
	defaultVolume:0.5,
	/*autoPlay: true/false (false on mobile by default) */
	autoPlay:false,
	/*autoLoad: auto/metadata/none (auto start sound load) */
	autoLoad:true,
	/*randomPlay: true/false */
	randomPlay:false,
	/*loopingOn: true/false (loop on the end of the playlist) */
	loopingOn:false,
	
	/* usePlaylistRollovers: true/false. Use rollovers on playlist items (mouseenter, mouseleave + callbacks) */
	usePlaylistRollovers: false,
	/* playlistItemContent: title/thumb/all. Auto create titles or thumbnails in playlist items, or both. */
	playlistItemContent: 'title',
	/* useNumbersInPlaylist: true/false. Prepend numbers in playlist items. */
	useNumbersInPlaylist: false,
	/* titleSeparator: String to append between song number and title. */
	titleSeparator: '.&nbsp;',
	
	/* autoSetSongTitle: true/false. Auto set song title in 'player_mediaName'. */
	autoSetSongTitle: true,
	
	/* useSongNameScroll: true/false. Use song name scrolling. */
	useSongNameScroll: true,
	/* scrollSpeed: speed of the scroll (number higher than zero). */
	scrollSpeed: 1,
	/* scrollSeparator: String to append between scrolling song name. */
	scrollSeparator: '&nbsp;&#42;&#42;&#42;&nbsp;',
	
	/* mediaTimeSeparator: String between current and total song time. */
	mediaTimeSeparator: '&nbsp;-&nbsp;',
	
	/* useVolumeTooltip: true/false. use tooltip over volume seekbar */
	useVolumeTooltip: true,
	
	/* useSeekbarTooltip: true/false. use tooltip over progress seekbar */
	useSeekbarTooltip: true,
	/* seekTooltipSeparator: String between current and total song position, for progress tooltip. */
	seekTooltipSeparator: '&nbsp;/&nbsp;',
	
	/* defaultArtistData: Default text for song media name. */
	defaultArtistData: 'Artist&nbsp;Name&nbsp;-&nbsp;Artist&nbsp;Title',
	
	/* useBtnRollovers: true/false. Use rollovers on buttons */
	useBtnRollovers: true,
	/* buttonsUrl: url of the buttons for normal and rollover state */
	buttonsUrl: {prev: 'media/data/icons/set1/prev.png', prevOn: 'media/data/icons/set1/prev_on.png', 
				 next: 'media/data/icons/set1/next.png', nextOn: 'media/data/icons/set1/next_on.png', 
				 pause: 'media/data/icons/set1/pause.png', pauseOn: 'media/data/icons/set1/pause_on.png',
				 play: 'media/data/icons/set1/play.png', playOn: 'media/data/icons/set1/play_on.png',
				 volume: 'media/data/icons/set1/volume.png', volumeOn: 'media/data/icons/set1/volume_on.png', 
				 mute: 'media/data/icons/set1/mute.png', muteOn: 'media/data/icons/set1/mute_on.png', 
				 download: 'media/data/icons/set1/download.png', downloadOn: 'media/data/icons/set1/download_on.png',
				 loop: 'media/data/icons/set1/loop.png', loopOn: 'media/data/icons/set1/loop_on.png',
				 shuffle: 'media/data/icons/set1/shuffle.png', shuffleOn: 'media/data/icons/set1/shuffle_on.png',
				 trackUrlIcon: 'media/data/url.png',
				 trackDownloadIcon: 'media/data/dlink.png',
				 trackRemoveIcon: 'media/data/remove.png',
				 link_play: 'media/data/link_play.png', link_pause: 'media/data/link_pause.png'},
				 
	/* useAlertMessaging: true/false. Alert error messages to user */
	useAlertMessaging: true,
	
	/* activatePlaylistScroll: true/false. activate jScrollPane. */
	activatePlaylistScroll: false,
	/* playlistScrollOrientation: vertical/horizontal. */
	playlistScrollOrientation: 'vertical',
	
	/* sortablePlaylistItems: true/false. Make playlist items sortable */
	sortablePlaylistItems: true,
	/* useRemoveBtnInTracks: true/false. Create remove buttons in playlist items for removing tracks. */
	useRemoveBtnInTracks: false,
	
	/* autoReuseMailForDownload: true/false. download backup for ios, save email after client first enters email address and auto send all emails to the same address */
	autoReuseMailForDownload: true,
	
	/* useKeyboardNavigation: false/false. Use keyboard navigation for music (space=toggle audio, left arrow=previous media, right arrow=next media, m=toggle volume) */
	useKeyboardNavigation: false,
	
	/* getTrackInfoFromID3: false/false. Get track info from id3 tags (title, artist, album, artwork) */
	getTrackInfoFromID3: false,
	
	ytAppId:'',/* youtube api key */
};





/* START PLAYER INIT */

var hap_player1, hap_players = [hap_player1];
jQuery(document).ready(function($) {
	jsReady = true;
	
	var dataArr = [{holder: $('#componentWrapper'), settings:hap_settings}];
	
	checkFlash(dataArr);
	
	//init component
	hap_players[0] = $('#componentWrapper').html5audio(hap_settings);
	//console.log(mcaudio);
	
	//playlist selector dropdown
	if($("#hap_playlist").length){
		if(!isMobile && !ieBelow8){
			//http://www.bulgaria-web-developers.com/projects/javascript/selectbox/
			$("#hap_playlist").selectbox({
				onChange: function (val, inst) {
					$("#hap_playlist").selectbox("disable");
					//console.log(val, inst);
					//api_loadPlaylist(hap_players[0], {hidden: false, id: '#'+val});
				}
			});
		}else{//we want default mobile scroll on selectbox
			$('#hap_playlist').change(function() {
				$("#hap_playlist").selectbox("disable");
				var val = $(this).val();
				//api_loadPlaylist(hap_players[0], {hidden: false, id: '#'+val});
			});
		}
		$(".sbHolder").css('zIndex',9999);
	}
	
});

var	mct = [
// changed to revised issue of 01-A show
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-01-A-part-1.mp3', title: 'January - First  Week - Part 1', hasNext: true, 
		"part_id" : "S01-A-1-part1" }, // 0
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-01-A-part-2.mp3', title: 'January - First  Week - Part 2', hasNext: true, 
		"part_id" : "S01-A-1-part2" }, // 1
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-01-A-part-3.mp3', title: 'January - First  Week - Part 3', hasNext: true, 
		"part_id" : "S01-A-1-part3" }, // 2
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-01-A-part-4.mp3', title: 'January - First  Week - Part 4', hasNext: false, 
		"part_id" : "S01-A-1-part4" }, // 3
// the following is no longer used but placeholder so indexes don't change
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/01-A%20Show%20Part%205.mp3', title: 'January - First  Week - Part 5' }, // 4

	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/Broadcast-02-A-01.mp3', title: 'February - First Week - Part 1', hasNext: true,
		"part_id" : "S02-A-1-part1" }, 
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/Broadcast-02-A-02.mp3', title: 'February - First Week - Part 2', hasNext: true,
		"part_id" : "S02-A-1-part2" }, 
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/Broadcast-02-A-03.mp3', title: 'February - First Week - Part 3', hasNext: true,
		"part_id" : "S02-A-1-part3" }, 
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/Broadcast-02-A-04.mp3', title: 'February - First Week - Part 4',
		"part_id" : "S02-A-1-part4" }, 
		
	/* 9  */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-03-A-part-1.mp3', title: 'March - First Week - Part 1', hasNext: true,
		"part_id" : "S03-A-1-part1" }, 
	/* 10 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-03-A-part-2.mp3', title: 'March - First Week - Part 2', hasNext: true,
		"part_id" : "S03-A-1-part2" }, 
	/* 11 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-03-A-part-3.mp3', title: 'March - First Week - Part 3', hasNext: true,
		"part_id" : "S03-A-1-part3" }, 
	/* 12 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-03-A-part-4.mp3', title: 'March - First Week - Part 4',
		"part_id" : "S03-A-1-part4" },
	
	 
	/* 13 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-04-A-part-1.mp3', title: 'April - First Week - Part 1', hasNext: true,
		"part_id" : "S04-A-1-part1" }, 
	/* 14 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-04-A-part-2.mp3', title: 'April - First Week - Part 2', hasNext: true,
		"part_id" : "S04-A-1-part2" }, 
	/* 15 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-04-A-part-3.mp3', title: 'April - First Week - Part 3', hasNext: true,
		"part_id" : "S04-A-1-part3" }, 
	/* 16 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-04-A-part-4.mp3', title: 'April - First Week - Part 4',
		"part_id" : "S04-A-1-part4" }, 

	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-05-A-part-1.mp3', title: 'May - First Week - Part 1', hasNext: true,
		"part_id" : "S05-A-1-part1" }, 
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-05-A-part-2.mp3', title: 'May - First Week - Part 2', hasNext: true,
		"part_id" : "S05-A-1-part2" }, 
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-05-A-part-3.mp3', title: 'May - First Week - Part 3', hasNext: true,
		"part_id" : "S05-A-1-part3" }, 
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-05-A-part-4.mp3', title: 'May - First Week - Part 4',
		"part_id" : "S05-A-1-part4" }, 

	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-06-A-part-1.mp3', title: 'June - First Week - Part 1', hasNext: true,
		"part_id" : "S06-A-1-part1" }, 
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-06-A-part-2.mp3', title: 'June - First Week - Part 2', hasNext: true,
		"part_id" : "S06-A-1-part2" }, 
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-06-A-part-3.mp3', title: 'June - First Week - Part 3', hasNext: true,
		"part_id" : "S06-A-1-part3" }, 
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-06-A-part-4.mp3', title: 'June - First Week - Part 4', 
		"part_id" : "S06-A-1-part4" }, 
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-06-A-part-5.mp3', title: 'June - First Week - Part 5' }, 

	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-07-A-part-1.mp3', title: 'July - First Week - Part 1', hasNext: true,
		"part_id" : "S07-A-1-part1" }, 
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-07-A-part-2.mp3', title: 'July - First Week - Part 2', hasNext: true,
		"part_id" : "S07-A-1-part2" }, 
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-07-A-part-3.mp3', title: 'July - First Week - Part 3', hasNext: true,
		"part_id" : "S07-A-1-part3" }, 
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-07-A-part-4.mp3', title: 'July - First Week - Part 4',
		"part_id" : "S07-A-1-part4" }, 
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-07-A-part-5.mp3', title: 'July - First Week - Part 5' }, 

	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-08-A-part-1.mp3', title: 'August - First Week - Part 1', hasNext: true,
		"part_id" : "S08-A-1-part1" }, 
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-08-A-part-2.mp3', title: 'August - First Week - Part 2', hasNext: true,
		"part_id" : "S08-A-1-part2" }, 
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-08-A-part-3.mp3', title: 'August - First Week - Part 3', hasNext: true,
		"part_id" : "S08-A-1-part3" }, 
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-08-A-part-4.mp3', title: 'August - First Week - Part 4',
		"part_id" : "S08-A-1-part4" }, 
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-08-A-part-5.mp3', title: 'August - First Week - Part 5' }, 

	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-09-A-part-1.mp3', title: 'September - First Week - Part 1', hasNext: true,
			"part_id" : "S09-A-1-part1" }, 
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-09-A-part-2.mp3', title: 'September - First Week - Part 2', hasNext: true,
			"part_id" : "S09-A-1-part2" }, 
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-09-A-part-3.mp3', title: 'September - First Week - Part 3', hasNext: true,
			"part_id" : "S09-A-1-part3" }, 
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-09-A-part-4.mp3', title: 'September - First Week - Part 4', hasNext: false,
			"part_id" : "S09-A-1-part4" }, 
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-09-A-part-5.mp3', title: 'September - First Week - Part 5' }, 

	/* 41 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-10-a-part-1-tracks-1-to-53.mp3', title: 'October - First Week - Part 1', hasNext: true,
		"part_id" : "S10-A-1-part1" }, 
	/* 42 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-10-a-part-2-tracks-54-to-115.mp3', title: 'October - First Week - Part 2', hasNext: true,
		"part_id" : "S10-A-1-part2" }, 
	/* 43 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-10-a-part-3-tracks-116-to-171.mp3', title: 'October - First Week - Part 3', hasNext: true,
		"part_id" : "S10-A-1-part3" }, 
	/* 44 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-10-a-part-4-tracks-172-to-231.mp3', title: 'October - First Week - Part 4',
		"part_id" : "S10-A-1-part4" }, 

	/* 45 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/11-A%20Show%20Part%201.mp3', title: 'November - First Week - Part 1', hasNext: true,
				"part_id" : "S11-A-1-part1" }, 
	/* 46 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/11-A%20Show%20Part%202.mp3', title: 'November - First Week - Part 2', hasNext: true,
				"part_id" : "S11-A-1-part2"  }, 
	/* 47 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/11-A%20Show%20Part%203.mp3', title: 'November - First Week - Part 3', hasNext: true,
				"part_id" : "S11-A-1-part3"  }, 
	/* 48 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/11-A%20Show%20Part%204.mp3', title: 'November - First Week - Part 4',
				"part_id" : "S11-A-1-part4"  }, 

	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-12-A-part-1.mp3', title: 'December - First Week - Part 1', hasNext: true,
				"part_id" : "S12-A-1-part1" }, 
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-12-A-part-2.mp3', title: 'December - First Week - Part 2', hasNext: true,
				"part_id" : "S12-A-1-part2" }, 
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-12-A-part-3.mp3', title: 'December - First Week - Part 3', hasNext: true,
				"part_id" : "S12-A-1-part3" }, 
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-12-A-part-4.mp3', title: 'December - First Week - Part 4', hasNext: false,
				"part_id" : "S12-A-1-part4" }, 
	// the following is no longer used, but placeholder so indexes don't change
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/Broadcast-12-A-05.mp3', title: 'December - First Week - Part 5' },

	/* 54 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-01-B-part-1-new.mp3', title: 'January - Second Week (new) - Part 1', hasNext: true,
		"part_id" : "S01-B-1-part1" }, 
	/* 55 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-01-B-part-2-new.mp3', title: 'January - Second Week (new) - Part 2', hasNext: true,
		"part_id" : "S01-B-1-part2" }, 
	/* 56 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-01-B-part-3-new.mp3', title: 'January - Second Week (new) - Part 3', hasNext: true,
		"part_id" : "S01-B-1-part3" }, 
	/* 57 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-01-B-part-4-new.mp3', title: 'January - Second Week (new) - Part 4',
		"part_id" : "S01-B-1-part4" }, 
	
	/* 58 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-02-B-part-1.mp3', title: 'February - Second Week - Part 1', hasNext: true,
		"part_id" : "S02-B-1-part1" }, 
	/* 59 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-02-B-part-2.mp3', title: 'February - Second Week - Part 2', hasNext: true,
		"part_id" : "S02-B-1-part2"  }, 
	/* 60 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-02-B-part-3.mp3', title: 'February - Second Week - Part 3', hasNext: true,
		"part_id" : "S02-B-1-part3"  }, 
	/* 61 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-02-B-part-4.mp3', title: 'February - Second Week - Part 4',
		"part_id" : "S02-B-1-part4"  }, 

	/* 62 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-03-B-part-1.mp3', title: 'March - Second Week - Part 1', hasNext: true,
	"part_id" : "S03-B-1-part1" }, 
	/* 63 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-03-B-part-2.mp3', title: 'March - Second Week - Part 2', hasNext: true,
	"part_id" : "S03-B-1-part2"  }, 
	/* 64 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-03-B-part-3.mp3', title: 'March - Second Week - Part 3', hasNext: true,
	"part_id" : "S03-B-1-part3"  }, 
	/* 65 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-03-B-part-4.mp3', title: 'March - Second Week - Part 4',
	"part_id" : "S03-B-1-part4"  }, 

	/* 66 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-04-B-part-1.mp3', title: 'April - Second Week - Part 1', hasNext: true,
		"part_id" : "S04-B-1-part1"  }, 
	/* 67 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-04-B-part-2.mp3', title: 'April - Second Week - Part 2', hasNext: true,
		"part_id" : "S04-B-1-part2" }, 
	/* 68 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-04-B-part-3.mp3', title: 'April - Second Week - Part 3', hasNext: true,
		"part_id" : "S04-B-1-part3" }, 
	/* 69 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-04-B-part-4.mp3', title: 'April - Second Week - Part 4',
		"part_id" : "S04-B-1-part4" }, 

	// 70
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/christmas-special-part1.mp3', title: 'Christmas Special - Part 1', hasNext: true }, 
	// 71
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/christmas-special-part2.mp3', title: 'Christmas Special - Part 2', hasNext: true }, 
	// 72
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/christmas-special-part3.mp3', title: 'Christmas Special - Part 3', hasNext: true }, 
	// 73
	{type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/christmas-special-part4.mp3', title: 'Christmas Special - Part 4' }, 

	/* 74 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-05-B-part-1.mp3', title: 'May - Second Week - Part 1', hasNext: true,
		"part_id" : "S05-B-1-part1"  }, 
	/* 75 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-05-B-part-2.mp3', title: 'May - Second Week - Part 2', hasNext: true,
		"part_id" : "S05-B-1-part2"  }, 
	/* 76 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-05-B-part-3.mp3', title: 'May - Second Week - Part 3', hasNext: true,
		"part_id" : "S05-B-1-part3"  }, 
	/* 77 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-05-B-part-4.mp3', title: 'May - Second Week - Part 4',
		"part_id" : "S05-B-1-part4"  },

	/* 78 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-06-B-part-1.mp3', title: 'June - Second Week - Part 1', hasNext: true,
		"part_id" : "S06-B-1-part1" }, 
	/* 79 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-06-B-part-2.mp3', title: 'June - Second Week - Part 2', hasNext: true,
		"part_id" : "S06-B-1-part2" }, 
	/* 80 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-06-B-part-3.mp3', title: 'June - Second Week - Part 3', hasNext: true,
		"part_id" : "S06-B-1-part3" }, 
	/* 81 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-06-B-part-4.mp3', title: 'June - Second Week - Part 4',
		"part_id" : "S06-B-1-part4" },

	/* 82 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-07-B-part-1.mp3', title: 'July - Second Week - Part 1', hasNext: true,
		"part_id" : "S07-B-1-part1" }, 
	/* 83 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-07-B-part-2.mp3', title: 'July - Second Week - Part 2', hasNext: true,
		"part_id" : "S07-B-1-part2" }, 
	/* 84 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-07-B-part-3.mp3', title: 'July - Second Week - Part 3', hasNext: true,
		"part_id" : "S07-B-1-part3" }, 
	/* 85 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-07-B-part-4.mp3', title: 'July - Second Week - Part 4',
		"part_id" : "S07-B-1-part4" },

	/* 86 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-08-B-part-1.mp3', title: 'August - Second Week - Part 1', hasNext: true,
		"part_id" : "S08-B-1-part1" }, 
	/* 87 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-08-B-part-2.mp3', title: 'August - Second Week - Part 2', hasNext: true,
		"part_id" : "S08-B-1-part2" }, 
	/* 88 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-08-B-part-3.mp3', title: 'August - Second Week - Part 3', hasNext: true,
		"part_id" : "S08-B-1-part3" }, 
	/* 89 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-08-B-part-4.mp3', title: 'August - Second Week - Part 4',
		"part_id" : "S08-B-1-part4" },

	/* 90 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-09-B-part-1.mp3', title: 'September - Second Week - Part 1', hasNext: true,
	"part_id" : "S09-B-1-part1" }, 
	/* 91 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-09-B-part-2.mp3', title: 'September - Second Week - Part 2', hasNext: true,
	"part_id" : "S09-B-1-part2" }, 
	/* 92 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-09-B-part-3.mp3', title: 'September - Second Week - Part 3', hasNext: true,
	"part_id" : "S09-B-1-part3" }, 
	/* 93 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-09-B-part-4.mp3', title: 'September - Second Week - Part 4',
	"part_id" : "S09-B-1-part4" },

	/* 94 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-04-C part-1.mp3', title: 'April - Third Week - Part 1', hasNext: true,
		"part_id" : "S04-C-1-part1" }, 
	/* 95 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-04-C part-2.mp3', title: 'April - Third Week - Part 2', hasNext: true,
		"part_id" : "S04-C-1-part2" }, 
	/* 96 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-04-C part-3.mp3', title: 'April - Third Week - Part 3', hasNext: true,
		"part_id" : "S04-C-1-part3" }, 
	/* 97 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-04-C part-4.mp3', title: 'April - Third Week - Part 4',
		"part_id" : "S04-C-1-part4" },

	/* 98 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-04-D-part-1.mp3', title: 'April - Fourth Week - Part 1', hasNext: true,
		"part_id" : "S04-D-1-part1" }, 
	/* 99 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-04-D-part-2.mp3', title: 'April - Fourth Week - Part 2', hasNext: true,
		"part_id" : "S04-D-1-part2" }, 
	/* 100 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-04-D-part-3.mp3', title: 'April - Fourth Week - Part 3', hasNext: true,
		"part_id" : "S04-D-1-part3" }, 
	/* 101 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-04-D-part-4.mp3', title: 'April - Fourth Week - Part 4',
		"part_id" : "S04-D-1-part4" },

	/* 102 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-05-C-part-1.mp3', title: 'May - Third Week - Part 1', hasNext: true,
		"part_id" : "S05-C-1-part1" }, 
	/* 103 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-05-C-part-2.mp3', title: 'May - Third Week - Part 2', hasNext: true,
		"part_id" : "S05-C-1-part2" }, 
	/* 104 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-05-C-part-3.mp3', title: 'May - Third Week - Part 3', hasNext: true,
		"part_id" : "S05-C-1-part3" }, 
	/* 105 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-05-C-part-4.mp3', title: 'May - Third Week - Part 4',
		"part_id" : "S05-C-1-part4" },

	/* 106 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-05-D-part-1.mp3', title: 'May - Last Week - Part 1', hasNext: true,
		"part_id" : "S05-D-1-part1" }, 
	/* 107 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-05-D-part-2.mp3', title: 'May - Last Week - Part 2', hasNext: true ,
		"part_id" : "S05-D-1-part2"}, 
	/* 108 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-05-D-part-3.mp3', title: 'May - Last Week - Part 3', hasNext: true,
		"part_id" : "S05-D-1-part3" }, 
	/* 109 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-05-D-part-4.mp3', title: 'May - Last Week - Part 4',
		"part_id" : "S05-D-1-part4" },

	/* 110 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-06-C-part-1.mp3', title: 'June - Third Week - Part 1', hasNext: true,
		"part_id" : "S06-C-1-part1"  }, 
	/* 111 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-06-C-part-2.mp3', title: 'June - Third Week - Part 2', hasNext: true,
		"part_id" : "S06-C-1-part2"  }, 
	/* 112 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-06-C-part-3.mp3', title: 'June - Third Week - Part 3', hasNext: true,
		"part_id" : "S06-C-1-part3"  }, 
	/* 113 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-06-C-part-4.mp3', title: 'June - Third Week - Part 4',
		"part_id" : "S06-C-1-part4"  },

	/* 114 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-06-D-part-1.mp3', title: 'June - Fourth Week - Part 1', hasNext: true,
		"part_id" : "S06-D-1-part1"   }, 
	/* 115 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-06-D-part-2.mp3', title: 'June - Fourth Week - Part 2', hasNext: true,
		"part_id" : "S06-D-1-part2"   }, 
	/* 116 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-06-D-part-3.mp3', title: 'June - Fourth Week - Part 3', hasNext: true,
		"part_id" : "S06-D-1-part3"   }, 
	/* 117 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-06-D-part-4.mp3', title: 'June - Fourth Week - Part 4',
		"part_id" : "S06-D-1-part4"   },

	/* 118 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-07-C-part-1.mp3', title: 'July - Third Week - Part 1', hasNext: true,
		"part_id" : "S07-C-1-part1"  }, 
	/* 119 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-07-C-part-2.mp3', title: 'July - Third Week - Part 2', hasNext: true,
		"part_id" : "S07-C-1-part2" }, 
	/* 120 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-07-C-part-3.mp3', title: 'July - Third Week - Part 3', hasNext: true,
		"part_id" : "S07-C-1-part3" }, 
	/* 121 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-07-C-part-4.mp3', title: 'July - Third Week - Part 4',
		"part_id" : "S07-C-1-part4" },

	/* 122 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-07-D-part-1.mp3', title: 'July - Fourth Week - Part 1', hasNext: true,
		"part_id" : "S07-D-1-part1" }, 
	/* 123 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-07-D-part-2.mp3', title: 'July - Fourth Week - Part 2', hasNext: true,
		"part_id" : "S07-D-1-part2" }, 
	/* 124 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-07-D-part-3.mp3', title: 'July - Fourth Week - Part 3', hasNext: true,
		"part_id" : "S07-D-1-part3" }, 
	/* 125 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-07-D-part-4.mp3', title: 'July - Fourth Week - Part 4',
		"part_id" : "S07-D-1-part4" },

	/* 126 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-08-C-part-1.mp3', title: 'August - Third Week - Part 1', hasNext: true,
		"part_id" : "S08-C-1-part1" }, 
	/* 127 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-08-C-part-2.mp3', title: 'August - Third Week - Part 2', hasNext: true,
		"part_id" : "S08-C-1-part2" }, 
	/* 128 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-08-C-part-3.mp3', title: 'August - Third Week - Part 3', hasNext: true,
		"part_id" : "S08-C-1-part3" }, 
	/* 129 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-08-C-part-4.mp3', title: 'August - Third Week - Part 4',
		"part_id" : "S08-C-1-part4" },

	/* 130 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-08-D-part-1.mp3', title: 'August - Fourth Week - Part 1', hasNext: true,
		"part_id" : "S08-D-1-part1" }, 
	/* 131 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-08-D-part-2.mp3', title: 'August - Fourth Week - Part 2', hasNext: true,
		"part_id" : "S08-D-1-part2" }, 
	/* 132 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-08-D-part-3.mp3', title: 'August - Fourth Week - Part 3', hasNext: true,
		"part_id" : "S08-D-1-part3" }, 
	/* 133 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-08-D-part-4.mp3', title: 'August - Fourth Week - Part 4',
		"part_id" : "S08-D-1-part4" },

	/* 134 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-09-C-part-1.mp3', title: 'September - Third Week - Part 1', hasNext: true,
	"part_id" : "S09-C-1-part1" }, 
	/* 135 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-09-C-part-2.mp3', title: 'September - Third Week - Part 2', hasNext: true,
	"part_id" : "S09-C-1-part2" }, 
	/* 136 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-09-C-part-3.mp3', title: 'September - Third Week - Part 3', hasNext: true,
	"part_id" : "S09-C-1-part3" }, 
	/* 137 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-09-C-part-4.mp3', title: 'September - Third Week - Part 4',
	"part_id" : "S09-C-1-part4" },

	/* 138 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-09-D-part-1.mp3', title: 'September - Fourth Week - Part 1', hasNext: true,
	"part_id" : "S09-D-1-part1" }, 
	/* 139 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-09-D-part-2.mp3', title: 'September - Fourth Week - Part 2', hasNext: true,
	"part_id" : "S09-D-1-part2" }, 
	/* 140 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-09-D-part-3.mp3', title: 'September - Fourth Week - Part 3', hasNext: true,
	"part_id" : "S09-D-1-part3" }, 
	/* 141 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-09-D-part-4.mp3', title: 'September - Fourth Week - Part 4',
	"part_id" : "S09-D-1-part4" },

	/* 142 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-10-B-part-1.mp3', title: 'October - Second Week - Part 1', hasNext: true,
				"part_id" : "S10-B-1-part1" }, 
	/* 143 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-10-B-part-2.mp3', title: 'October - Second Week - Part 2', hasNext: true,
				"part_id" : "S10-B-1-part2" }, 
	/* 144 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-10-B-part-3.mp3', title: 'October - Second Week - Part 3', hasNext: true,
				"part_id" : "S10-B-1-part3" }, 
	/* 145 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-10-B-part-4.mp3', title: 'October - Second Week - Part 4',
				"part_id" : "S10-B-1-part4" },

	/* 146 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-10-C-part-1.mp3', title: 'October - Third Week - Part 1', hasNext: true,
				"part_id" : "S10-C-1-part1" }, 
	/* 147 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-10-C-part-2.mp3', title: 'October - Third Week - Part 2', hasNext: true,
				"part_id" : "S10-C-1-part2" }, 
	/* 148 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-10-C-part-3-revised.mp3', title: 'October - Third Week - Part 3', hasNext: true,
				"part_id" : "S10-C-1-part3" }, 
	/* 149 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-10-C-part-4.mp3', title: 'October - Third Week - Part 4',
				"part_id" : "S10-C-1-part4" },

	/* 150 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-10-D-part-1.mp3', title: 'October - Fourth Week - Part 1', hasNext: true,
				"part_id" : "S10-D-1-part1" }, 
	/* 151 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-10-D-part-2.mp3', title: 'October - Fourth Week - Part 2', hasNext: true,
				"part_id" : "S10-D-1-part2" }, 
	/* 152 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-10-D-part-3.mp3', title: 'October - Fourth Week - Part 3', hasNext: true,
				"part_id" : "S10-D-1-part3" }, 
	/* 153 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-10-D-part-4.mp3', title: 'October - Fourth Week - Part 4',
				"part_id" : "S10-D-1-part4" },

	/* 154 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-11-B-part-1.mp3', title: 'November - Second Week - Part 1', hasNext: true,
			"part_id" : "S11-B-1-part1" }, 
	/* 155 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-11-B-part-2.mp3', title: 'November - Second Week - Part 2', hasNext: true,
			"part_id" : "S11-B-1-part2" }, 
	/* 156 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-11-B-part-3.mp3', title: 'November - Second Week - Part 3', hasNext: true,
			"part_id" : "S11-B-1-part3" }, 
	/* 157 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-11-B-part-4.mp3', title: 'November - Second Week - Part 4',
			"part_id" : "S11-B-1-part4" },

	/* 158 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-11-C-part-1.mp3', title: 'November - Third Week - Part 1', hasNext: true,
			"part_id" : "S11-C-1-part1" }, 
	/* 159 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-11-C-part-2.mp3', title: 'November - Third Week - Part 2', hasNext: true,
			"part_id" : "S11-C-1-part2" }, 
	/* 160 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-11-C-part-3.mp3', title: 'November - Third Week - Part 3', hasNext: true,
			"part_id" : "S11-C-1-part3" }, 
	/* 161 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-11-C-part-4.mp3', title: 'November - Third Week - Part 4',
			"part_id" : "S11-C-1-part4" },

	/* 162 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-11-D-part-1.mp3', title: 'November - Fourth Week - Part 1', hasNext: true,
			"part_id" : "S11-D-1-part1" }, 
	/* 163 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-11-D-part-2.mp3', title: 'November - Fourth Week - Part 2', hasNext: true,
			"part_id" : "S11-D-1-part2" }, 
	/* 164 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-11-D-part-3.mp3', title: 'November - Fourth Week - Part 3', hasNext: true,
			"part_id" : "S11-D-1-part3" }, 
	/* 165 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-11-D-part-4.mp3', title: 'November - Fourth Week - Part 4',
			"part_id" : "S11-D-1-part4" },

	/* 166 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-12-B-part-1.mp3', title: 'December - Second Week - Part 1', hasNext: true,
			"part_id" : "S12-B-1-part1"  }, 
	/* 167 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-12-B-part-2.mp3', title: 'December - Second Week - Part 2', hasNext: true,
			"part_id" : "S12-B-1-part2" }, 
	/* 168 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-12-B-part-3.mp3', title: 'December - Second Week - Part 3', hasNext: true,
			"part_id" : "S12-B-1-part3" }, 
	/* 169 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-12-B-part-4.mp3', title: 'December - Second Week - Part 4',
			"part_id" : "S12-B-1-part4" },

	/* 170 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-12-C-part-1.mp3', title: 'December - Third Week - Part 1', hasNext: true,
			"part_id" : "S12-C-1-part1" }, 
	/* 171 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-12-C-part-2.mp3', title: 'December - Third Week - Part 2', hasNext: true,
			"part_id" : "S12-C-1-part2" }, 
	/* 172 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-12-C-part-3.mp3', title: 'December - Third Week - Part 3', hasNext: true,
			"part_id" : "S12-C-1-part3" }, 
	/* 173 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-12-C-part-4.mp3', title: 'December - Third Week - Part 4',
			"part_id" : "S12-C-1-part4" },

	/* 174 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-12-D-part-1.mp3', title: 'December - Fourth Week - Part 1', hasNext: true,
			"part_id" : "S12-D-1-part1" }, 
	/* 175 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-12-D-part-2.mp3', title: 'December - Fourth Week - Part 2', hasNext: true,
			"part_id" : "S12-D-1-part2" }, 
	/* 176 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-12-D-part-3.mp3', title: 'December - Fourth Week - Part 3', hasNext: true,
			"part_id" : "S12-D-1-part3" }, 
	/* 177 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-12-D-part-4.mp3', title: 'December - Fourth Week - Part 4',
			"part_id" : "S12-D-1-part4" },

	/* 178 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/christmas-2017-part-1.mp3', title: 'Christmas Special 2017 - Part 1', hasNext: true }, 
	/* 179 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/christmas-2017-part-2.mp3', title: 'Christmas Special 2017 - Part 2' },

	/* 180 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-01-C-part-1.mp3', title: 'January - Third Week - Part 1', hasNext: true,
				"part_id" : "S01-C-1-part1" }, 
	/* 181 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-01-C-part-2.mp3', title: 'January - Third Week - Part 2', hasNext: true, 
				"part_id" : "S01-C-1-part2" }, 
	/* 182 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-01-C-part-3.mp3', title: 'January - Third Week - Part 3', hasNext: true, 
				"part_id" : "S01-C-1-part3" }, 
	/* 183 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-01-C-part-4.mp3', title: 'January - Third Week - Part 4',
				"part_id" : "S01-C-1-part4" }, 

	/* 184 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-01-D-part-1.mp3', title: 'January - Fourth Week - Part 1', hasNext: true,
				"part_id" : "S01-D-1-part1" }, 
	/* 185 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-01-D-part-2.mp3', title: 'January - Fourth Week - Part 2', hasNext: true, 
				"part_id" : "S01-D-1-part2" }, 
	/* 186 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-01-D-part-3.mp3', title: 'January - Fourth Week - Part 3', hasNext: true, 
				"part_id" : "S01-D-1-part3" }, 
	/* 187 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-01-D-part-4.mp3', title: 'January - Fourth Week - Part 4', 
				"part_id" : "S01-D-1-part4" },

	/* 188 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-02-C-part-1.mp3', title: 'February - Third Week - Part 1', hasNext: true,
	"part_id" : "S02-C-1-part1" }, 
	/* 189 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-02-C-part-2.mp3', title: 'February - Third Week - Part 2', hasNext: true,
	"part_id" : "S02-C-1-part2" }, 
	/* 190 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-02-C-part-3.mp3', title: 'February - Third Week - Part 3', hasNext: true,
	"part_id" : "S02-C-1-part3" }, 
	/* 191 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-02-C-part-4.mp3', title: 'February - Third Week - Part 4',
	"part_id" : "S02-C-1-part4" },

	/* 192 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-02-D-part-1.mp3', title: 'February - Fourth Week - Part 1', hasNext: true,
	"part_id" : "S02-D-1-part1" }, 
	/* 193 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-02-D-part-2.mp3', title: 'February - Fourth Week - Part 2', hasNext: true,
	"part_id" : "S02-D-1-part2" }, 
	/* 194 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-02-D-part-3.mp3', title: 'February - Fourth Week - Part 3', hasNext: true,
	"part_id" : "S02-D-1-part3" }, 
	/* 195 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-02-D-part-4.mp3', title: 'February - Fourth Week - Part 4',
	"part_id" : "S02-D-1-part4" },

	/* 196 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-03-C-part-1.mp3', title: 'March - Third Week - Part 1', hasNext: true,
		"part_id" : "S03-C-1-part1" },  
	/* 197 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-03-C-part-2.mp3', title: 'March - Third Week - Part 2', hasNext: true,
		"part_id" : "S03-C-1-part2" }, 
	/* 198 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-03-C-part-3.mp3', title: 'March - Third Week - Part 3', hasNext: true,
		"part_id" : "S03-C-1-part3" }, 
	/* 199 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-03-C-part-4.mp3', title: 'March - Third Week - Part 4',
		"part_id" : "S03-C-1-part4" },

	/* 200 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-03-D-part-1.mp3', title: 'March - Fourth Week - Part 1', hasNext: true,
		"part_id" : "S03-D-1-part1" }, 
	/* 201 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-03-D-part-2.mp3', title: 'March - Fourth Week - Part 2', hasNext: true,
		"part_id" : "S03-D-1-part2" }, 
	/* 202 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-03-D-part-3.mp3', title: 'March - Fourth Week - Part 3', hasNext: true,
		"part_id" : "S03-D-1-part3" }, 
	/* 203 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/broadcast-03-D-part-4.mp3', title: 'March - Fourth Week - Part 4',
		"part_id" : "S03-D-1-part4" },

	/* 204 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/top40_1963_part1.mp3', title: 'Year-End Top 40 1963 - Part 1', hasNext: true }, 
	/* 205 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/top40_1963_part2.mp3', title: 'Year-End Top 40 1963 - Part 2' },

	/* 206 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/top40_1962_part1.mp3', title: 'Year-End Top 40 1962 - Part 1', hasNext: true }, 
	/* 207 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/top40_1962_part2.mp3', title: 'Year-End Top 40 1962 - Part 2' },

	/* 208 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/top40_1964_part1.mp3', title: 'Year-End Top 40 1964 - Part 1', hasNext: true }, 
	/* 209 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/top40_1964_part2.mp3', title: 'Year-End Top 40 1964 - Part 2' },

	/* 210 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/top40_1961_part1.mp3', title: 'Year-End Top 40 1961 - Part 1', hasNext: true }, 
	/* 211 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/top40_1961_part2.mp3', title: 'Year-End Top 40 1961 - Part 2' },

	/* 212 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/top40_1960_part1.mp3', title: 'Year-End Top 40 1960 - Part 1', hasNext: true }, 
	/* 213 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/top40_1960_part2.mp3', title: 'Year-End Top 40 1960 - Part 2' },

	/* 214 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/host_100_part1.mp3', title: 'Six String Mark\'s Top 100 - Part 1', hasNext: true }, 
	/* 215 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/host_100_part2.mp3', title: 'Six String Mark\'s Top 100 - Part 2', hasNext: true }, 
	/* 216 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/host_100_part3.mp3', title: 'Six String Mark\'s Top 100 - Part 3', hasNext: true }, 
	/* 217 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/host_100_part4.mp3', title: 'Six String Mark\'s Top 100 - Part 4' }, 

	/* 218 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/top40_1965_part1.mp3', title: 'Year-End Top 40 1965 - Part 1', hasNext: true }, 
	/* 219 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/top40_1965_part2.mp3', title: 'Year-End Top 40 1965 - Part 2' },

	/* 220 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/top40_1966_part1.mp3', title: 'Year-End Top 40 1966 - Part 1', hasNext: true }, 
	/* 221 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/top40_1966_part2.mp3', title: 'Year-End Top 40 1966 - Part 2' },

	/* 222 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/top40_1967_part1.mp3', title: 'Year-End Top 40 1967 - Part 1', hasNext: true }, 
	/* 223 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/top40_1967_part2.mp3', title: 'Year-End Top 40 1967 - Part 2' },

	/* 224 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/top40_1968_part1.mp3', title: 'Year-End Top 40 1968 - Part 1', hasNext: true }, 
	/* 225 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/top40_1968_part2.mp3', title: 'Year-End Top 40 1968 - Part 2' },

	/* 226 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/sues_favorites.mp3', title: 'Sue\'s Favorites',
	"part_id" : "sue_favs" },

	/* 227 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/movies_comp1.mp3', title: 'Movie Music Comp. 1',
	"part_id" : "movies_1" },
	/* 228 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/answer_songs_comp1.mp3', title: 'Answer Songs Comp. 1',
		"part_id" : "ANS-1-1" },
	/* 229 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/done_song_comp1.mp3', title: 'Done to My Song Comp. 1' },

	/* 230 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/girl_power_comp1.mp3', title: 'Girl Power Comp. 1' },
	/* 231 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/mystery_mix_comp1.mp3', title: 'Mystery Mix Comp. 1' },
	/* 232 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/name_game_comp1.mp3', title: 'Name Game Comp. 1' },

	/* 233 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/top40_1969_part1.mp3', title: 'Year-End Top 40 1969 - Part 1', hasNext: true }, 
	/* 234 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/top40_1969_part2.mp3', title: 'Year-End Top 40 1969 - Part 2' },

	/* 235 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/novelty_comp1.mp3', title: 'Novelty Songs Comp. 1' },
	/* 236 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/ohw_comp1.mp3', title: 'One-Hit Wonders Comp. 1' },
	/* 237 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/celeb_comp1.mp3', title: 'Celebrity Spotlight Comp. 1' },

	/* 238 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/christmas_2018_part1.mp3', title: 'Christmas Special 2018 Part 1', hasNext: true },
	/* 239 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/christmas_2018_part2.mp3', title: 'Christmas Special 2018 Part 2' },

	/* 240 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/christmas_2019_part1.mp3', title: 'Christmas Special 2019 Part 1', hasNext: true },
	/* 241 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/christmas_2019_part2.mp3', title: 'Christmas Special 2019 Part 2' },

	/* 242 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/TD321-part1.mp3', title: 'Triple Decade 3-2-1 Countdown Part 1', hasNext: true },
	/* 243 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/TD321-part2.mp3', title: 'Triple Decade 3-2-1 Countdown Part 2', hasNext: true },
	/* 244 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/TD321-part3.mp3', title: 'Triple Decade 3-2-1 Countdown Part 3', hasNext: true },
	/* 245 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/TD321-part4.mp3', title: 'Triple Decade 3-2-1 Countdown Part 4', hasNext: true },
	/* 246 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/TD321-part5.mp3', title: 'Triple Decade 3-2-1 Countdown Part 5' },

	/* 247 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/SP2020-part1.mp3', title: 'Christmas Special 2020 Part 1', hasNext: true,
		"part_id" : "SP2020-part1" },
	/* 248 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/SP2020-part2.mp3', title: 'Christmas Special 2020 Part 2',
		"part_id" : "SP2020-part2" },

	/* 249 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/Christmas-Special-2021-Part1.mp3', title: 'Christmas Special 2021 Part 1', hasNext: true,
		"part_id" : "SP2021-part1" },
	/* 250 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/Christmas-Special-2021-Part2.mp3', title: 'Christmas Special 2021 Part 2',
		"part_id" : "SP2021-part2" },

	/* 251 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/blend-01-part1.mp3', title: 'The Blend Show #1 Part 1', hasNext: true,
		"part_id" : "blend-01-part1" },
	/* 252 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/blend-01-part2.mp3', title: 'The Blend Show #1 Part 2',
		"part_id" : "blend-01-part2" },

	/* 253 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/blend-02-part1.mp3', title: 'The Blend Show #2 Part 1', hasNext: true,
		"part_id" : "blend-02-part1" },
	/* 254 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/blend-02-part2.mp3', title: 'The Blend Show #2 Part 2',
		"part_id" : "blend-02-part2" },

	/* 255 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/blend-03-part1.mp3', title: 'The Blend Show #3 Part 1', hasNext: true,
		"part_id" : "blend-03-part1" },
	/* 256 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/blend-03-part2.mp3', title: 'The Blend Show #3 Part 2',
		"part_id" : "blend-03-part2" },

	/* 257 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/blend-04-part1.mp3', title: 'The Blend Show #4 Part 1', hasNext: true,
		"part_id" : "blend-04-part1" },
	/* 258 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/blend-04-part2.mp3', title: 'The Blend Show #4 Part 2',
		"part_id" : "blend-04-part2" },
	
	/* 259 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/blend-05-part1.mp3', title: 'The Blend Show #5 Part 1', hasNext: true,
		"part_id" : "blend-05-part1" },
	/* 260 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/blend-05-part2.mp3', title: 'The Blend Show #5 Part 2',
		"part_id" : "blend-05-part2" },
		
	/* 261 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/blend-06-part1.mp3', title: 'The Blend Show #6 Part 1', hasNext: true,
		"part_id" : "blend-06-part1" },
	/* 262 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/blend-06-part2.mp3', title: 'The Blend Show #6 Part 2',
		"part_id" : "blend-06-part2" },

	/* 263 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/Christmas-Special-2022-Part1.mp3', title: 'Christmas Special 2022 Part 1', hasNext: true,
		"part_id" : "SP2022-part1" },
	/* 264 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/Christmas-Special-2022-Part2.mp3', title: 'Christmas Special 2022 Part 2', hasNext: true,
		"part_id" : "SP2022-part2" },
	/* 265 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/Christmas-Special-2022-Part3.mp3', title: 'Christmas Special 2022 Part 3', hasNext: true,
		"part_id" : "SP2022-part3" },
	/* 266 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/Christmas-Special-2022-Part4.mp3', title: 'Christmas Special 2022 Part 4',
		"part_id" : "SP2022-part4" },
		
	/* 267 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/blend-07-part1.mp3', title: 'The Blend Show #7 Part 1', hasNext: true,
		"part_id" : "blend-07-part1" },
	/* 268 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/blend-07-part2.mp3', title: 'The Blend Show #7 Part 2',
		"part_id" : "blend-07-part2" },

	/* 269 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/50-number-ones-show-1-part-1.mp3', title: 'Fifty Years of Number One Hits #1 Part 1', hasNext: true,
		"part_id" : "fifty-01-part1" },
	/* 270 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/50-number-ones-show-1-part-2.mp3', title: 'Fifty Years of Number One Hits #1 Part 2',
		"part_id" : "fifty-01-part2" },
	
	/* 271 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/70s-07-part-1.mp3', title: 'Seventies July Part 1', hasNext: true,
		"part_id" : "70s-07-part1" },
	/* 272 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/70s-07-part-2.mp3', title: 'Seventies July Part 2', hasNext: true,
		"part_id" : "70s-07-part2" },
	/* 273 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/70s-07-part-3.mp3', title: 'Seventies July Part 3',
		"part_id" : "70s-07-part3" },
	
	
	/* 274 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/70s-08-part-1.mp3', title: 'Seventies August Part 1', hasNext: true,
		"part_id" : "70s-08-part1" },
	/* 275 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/70s-08-part-2.mp3', title: 'Seventies August Part 2', hasNext: true,
		"part_id" : "70s-08-part2" },
	/* 276 */ {type: 'local', mp3: 'http://www.mckenzieduo.com/sounds/70s-08-part-3.mp3', title: 'Seventies August Part 3',
		"part_id" : "70s-08-part3" },
	

	

	];

function mc_play(idx) {
	hap_players[0].setVolume(5);
	//hap_players[0].getPlayerState(5);
	
	last_played_idx = idx;
	//console.log(hap_players[0]);
	api_inputAudio(hap_players[0],mct[idx]);
	//console.log(hap_players[0]);
	api_playAudio(hap_players[0]);
	if( play_cycles < 0 ) {
		play_cycles = 0;
		setInterval( function() { mc_monitor(); }, 1000 );
	}
	var now_playing_cont = document.getElementById("now_playing");
	now_playing_cont.classList.add("filler");
	var now_playing_label = document.getElementById("now_playing_label");
	if( now_playing_label ) {
			now_playing_label.innerHTML = "Vinyl Vortex Oldies";
	}
	current_entries = null;
	current_entry_idx = 0;
	//console.log( "get " + idx );
	// Get the contents of the part if present - save array of entries
	if( typeof mct[idx].part_id !== 'undefined' ) {
		//console.log( "parting" );
		var part_div = document.getElementById( mct[idx].part_id );
		now_playing_cont.classList.remove("filler");
		if( part_div ) {
			current_entries = part_div.getElementsByClassName("entry");
			//console.log(current_entries);
		}
	}  
}

function mc_monitor() {
	play_cycles++;
	
	//console.log('playing=' + last_played_idx + ', cycles=' + play_cycles);
	var stuff = document.getElementsByClassName('player_mediaTime_current');
	if( stuff ) {
		var x1 = stuff[0].textContent;
		var x2 = x1.split(/[^0-9:]/);    //split("-");
		var playtime = x2[0];
		if( playtime.length < 6) {
			playtime = "0" + playtime;
		}
		if( current_entries ) {
			var now_playing_idx = -1;
			var last_idx = -1;
			var prev_timed = -1;
			for( var i = 1; i < current_entries.length; i++ ) {
				var entry = current_entries[i];
				if( entry.dataset.start ) {
					var comptime = entry.dataset.start;
					if( comptime.length < 6 ) {
						comptime = "0" + comptime;
					}
					last_idx = i;
					prev_timed = i;
					if( comptime >= playtime ) {
						now_playing_idx = i - 1;
						break;
					}
				}
			}
			if( now_playing_idx == -1 && last_idx >= 0 ) {
				now_playing_idx = last_idx;
			}
			if( now_playing_idx >= 0 ) {
				entry = current_entries[now_playing_idx];

				var mc_title = "";
				var mc_artist = "";
				var mc_year = "";
				var song_title = entry.getElementsByClassName("title");
				var artist = entry.getElementsByClassName("artist");
				var year = entry.getElementsByClassName("year");
				if( song_title && song_title.length > 0 ) {
					mc_title = song_title[0].textContent;
				}
				if( artist && artist.length > 0 ) {
					mc_artist = artist[0].textContent;
				}
				if( year && year.length > 0 ) {
					mc_year = year[0].textContent;
				}
				//console.log( "ick=" + entry.dataset.start + " " + 
				//	mc_title + "/" + mc_artist + "/" + mc_year );
				var me_label = mc_title + " / " + mc_artist + " (" + mc_year.trim() + ")";
				var now_playing_label = document.getElementById("now_playing_label");
				//console.log(now_playing_label);
				if( now_playing_label ) {
					now_playing_label.innerHTML = me_label;
				}
				//document.title = "VV -" + me_label;
				//console.log( current_entries[i]);
				//console.log( current_entries[i].dataset.start );
			}
		
		}
	}
}	
function skipToPreviousSong(x) {
	//console.log('setWhere');
	var stuff = document.getElementsByClassName('player_mediaTime_current');
	if( stuff ) {
		var x1 = stuff[0].textContent;
		var x2 = x1.split(/[^0-9:]/);    //split("-");
		var playtime = x2[0];
		if( playtime.length < 6) {
			playtime = "0" + playtime;
		}
		if( current_entries ) {
			var now_playing_idx = -1;
			var last_idx = -1;
			var prev_timed = -1;
			for( var xx = current_entries.length-1; xx > 0; xx-- ) {
				var entry = current_entries[xx];
				var comptime = entry.dataset.start;
				if( comptime.length < 6 ) {
					comptime = "0" + comptime;
				}
				if( comptime <= playtime ) {
					//console.log('current playing'); console.log(entry);
					// comptime is the start of the current song - now
					// work back to first real song ahead of it
					
					for( var i = current_entries.length-1; i >= 0; i-- ) {
						var entry = current_entries[i];
						//console.log( ""+ entry.classList );
						if( entry.dataset.start && (entry.classList.contains("noski") 
						||!(entry.classList.contains("xx") 
						|| entry.classList.contains("ss") || entry.classList.contains("part") 
						|| entry.classList.contains("filler") ) ) ) {
							var pcomptime = entry.dataset.start;
							if( pcomptime.length < 6 ) {
								pcomptime = "0" + pcomptime;
							}
							//console.log('compare ' + comptime + '/' + pcomptime );
							//console.log( comptime + "/" + playtime );
							if( pcomptime < comptime ) {
								if( i > 0 ) {
									//entry = current_entries[i-1];
									//pcomptime = entry.dataset.start
								}
								var mmss = pcomptime.split(':'); 
								//console.log( mmss.length );
								var sec = mmss[0]*60 + mmss[1]*1;
								//console.log(entry);
								hap_players[0].setWhere(sec);
								return;
							}
						}
					}
				}
			}
		} else {
			// jump back 30 seconds if no track times
			var mmss = playtime.split(':'); 
			//console.log( mmss.length );
			var sec = mmss[0]*60 + mmss[1]*1;
			sec -= 45;
			if( sec > 0 ) {
				hap_players[0].setWhere(sec);
			}

		}
	}

}

function skipToNextSong(x) {
	//console.log('setWhere');
	var stuff = document.getElementsByClassName('player_mediaTime_current');
	if( stuff ) {
		var x1 = stuff[0].textContent;
		var x2 = x1.split(/[^0-9:]/);    //split("-");
		var playtime = x2[0];
		if( playtime.length < 6) {
			playtime = "0" + playtime;
		}
		if( current_entries ) {
			var now_playing_idx = -1;
			var last_idx = -1;
			var prev_timed = -1;
			for( var i = 1; i < current_entries.length; i++ ) {
				var entry = current_entries[i];
				//console.log( ""+ entry.classList );
				if( entry.dataset.start && (entry.classList.contains("noski") 
				||!(entry.classList.contains("xx") 
				|| entry.classList.contains("ss") || entry.classList.contains("part") 
				|| entry.classList.contains("filler") ) ) ) {
					var comptime = entry.dataset.start;
					if( comptime.length < 6 ) {
						comptime = "0" + comptime;
					}
					//console.log( comptime + "/" + playtime );
					if( comptime >= playtime ) {
						var mmss = comptime.split(':'); 
						//console.log( mmss.length );
						var sec = mmss[0]*60 + mmss[1]*1;
						hap_players[0].setWhere(sec);
						//mc_monitor();
						break;
					}
				}
			}
		
		} else {
			// jump ahead 30 seconds if no track times
			var mmss = playtime.split(':'); 
			//console.log( mmss.length );
			var sec = mmss[0]*60 + mmss[1]*1;
			hap_players[0].setWhere(sec+45);
		}
	} 

}

function audioPlayerSoundEnd(a,b,c) {
	//alert('wow ' + a + '/' + b);
	//api_stopAudio(hap_players[0]);
	//api_destroyPlaylist(hap_players[0]);
	//console.log('destroyed');
	if( last_played_idx != -1 && mct[last_played_idx].hasNext ) {
		mc_play(last_played_idx+1);
		//api_inputAudio(hap_players[0],mct[last_played_idx+1]);
		//api_playAudio(hap_players[0]);
	} else {
		api_stopAudio(hap_players[0]);
	}
	//api_startAudio(hap_players[0]);
}
		
/* END PLAYER INIT */