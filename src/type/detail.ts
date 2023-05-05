interface FreeTrialPrivilege {
	resConsumable: boolean;
	userConsumable: boolean;
	listenType?: any;
}

interface ChargeInfoInt {
	rate: number;
	chargeUrl?: any;
	chargeMessage?: any;
	chargeType: number;
}
export interface PrivilegeInt {
	id: number;
	fee: number;
	payed: number;
	realPayed: number;
	st: number;
	pl: number;
	dl: number;
	sp: number;
	cp: number;
	subp: number;
	cs: boolean;
	maxbr: number;
	fl: number;
	pc?: any;
	toast: boolean;
	flag: number;
	paidBigBang: boolean;
	preSell: boolean;
	playMaxbr: number;
	downloadMaxbr: number;
	maxBrLevel: string;
	playMaxBrLevel: string;
	downloadMaxBrLevel: string;
	plLevel: string;
	dlLevel: string;
	flLevel: string;
	rscl?: any;
	freeTrialPrivilege: FreeTrialPrivilege;
	chargeInfoList: ChargeInfoInt[];
}
// interface Subscriber {
// 	defaultAvatar: boolean;
// 	province: number;
// 	authStatus: number;
// 	followed: boolean;
// 	avatarUrl: string;
// 	accountStatus: number;
// 	gender: number;
// 	city: number;
// 	birthday: number;
// 	userId: number;
// 	userType: number;
// 	nickname: string;
// 	signature: string;
// 	description: string;
// 	detailDescription: string;
// 	avatarImgId: number;
// 	backgroundImgId: number;
// 	backgroundUrl: string;
// 	authority: number;
// 	mutual: boolean;
// 	expertTags?: any;
// 	experts?: any;
// 	djStatus: number;
// 	vipType: number;
// 	remarkName?: any;
// 	authenticationTypes: number;
// 	avatarDetail?: any;
// 	anchor: boolean;
// 	avatarImgIdStr: string;
// 	backgroundImgIdStr: string;
// 	avatarImgId_str: string;
// }
// interface AvatarDetail {
// 	userType: number;
// 	identityLevel: number;
// 	identityIconUrl: string;
// }

// interface Creator {
// 	defaultAvatar: boolean;
// 	province: number;
// 	authStatus: number;
// 	followed: boolean;
// 	avatarUrl: string;
// 	accountStatus: number;
// 	gender: number;
// 	city: number;
// 	birthday: number;
// 	userId: number;
// 	userType: number;
// 	nickname: string;
// 	signature: string;
// 	description: string;
// 	detailDescription: string;
// 	avatarImgId: number;
// 	backgroundImgId: number;
// 	backgroundUrl: string;
// 	authority: number;
// 	mutual: boolean;
// 	expertTags: string[];
// 	experts?: any;
// 	djStatus: number;
// 	vipType: number;
// 	remarkName?: any;
// 	authenticationTypes: number;
// 	avatarDetail: AvatarDetail;
// 	anchor: boolean;
// 	avatarImgIdStr: string;
// 	backgroundImgIdStr: string;
// 	avatarImgId_str: string;
// }

// interface Ar {
// 	id: number;
// 	name: string;
// 	tns: any[];
// 	alias: any[];
// }

// interface Al {
// 	id: number;
// 	name: string;
// 	picUrl: string;
// 	tns: string[];
// 	pic_str: string;
// 	pic: number;
// }

// interface H {
// 	br: number;
// 	fid: number;
// 	size: number;
// 	vd: number;
// 	sr: number;
// }

// interface M {
// 	br: number;
// 	fid: number;
// 	size: number;
// 	vd: number;
// 	sr: number;
// }
// interface L {
// 	br: number;
// 	fid: number;
// 	size: number;
// 	vd: number;
// 	sr: number;
// }

// interface Sq {
// 	br: number;
// 	fid: number;
// 	size: number;
// 	vd: number;
// 	sr: number;
// }

// interface Hr {
// 	br: number;
// 	fid: number;
// 	size: number;
// 	vd: number;
// 	sr: number;
// }

// interface Track {
// 	name: string;
// 	id: number;
// 	pst: number;
// 	t: number;
// 	ar: Ar[];
// 	alia?: any[];
// 	pop: number;
// 	st: number;
// 	rt: string;
// 	fee: number;
// 	v: number;
// 	crbt?: any;
// 	cf: string;
// 	al: Al;
// 	dt: number;
// 	h: H;
// 	m: M;
// 	l: L;
// 	sq: Sq;
// 	hr: Hr;
// 	a?: any;
// 	cd: string;
// 	no: number;
// 	rtUrl?: any;
// 	ftype: number;
// 	rtUrls: any[];
// 	djId: number;
// 	copyright: number;
// 	s_id: number;
// 	mark: number;
// 	originCoverType: number;
// 	originSongSimpleData?: any;
// 	tagPicList?: any;
// 	resourceState: boolean;
// 	version: number;
// 	songJumpInfo?: any;
// 	entertainmentTags?: any;
// 	awardTags?: any;
// 	single: number;
// 	noCopyrightRcmd?: any;
// 	rtype: number;
// 	rurl?: any;
// 	mst: number;
// 	cp: number;
// 	mv: number;
// 	publishTime: number;
// 	tns: string[];
// 	alg: string;
// }

// interface TrackId {
// 	id: number;
// 	v: number;
// 	t: number;
// 	at: number;
// 	alg: string;
// 	uid: number;
// 	rcmdReason: string;
// 	sc?: any;
// 	f?: any;
// 	sr?: any;
// }

// export interface PlaylistInt {
// 	id: number;
// 	name: string;
// 	coverImgId: number;
// 	coverImgUrl: string;
// 	coverImgId_str: string;
// 	adType: number;
// 	userId: number;
// 	createTime: number;
// 	status: number;
// 	opRecommend: boolean;
// 	highQuality: boolean;
// 	newImported: boolean;
// 	updateTime: number;
// 	trackCount: number;
// 	specialType: number;
// 	privacy: number;
// 	trackUpdateTime: number;
// 	commentThreadId: string;
// 	playCount: number;
// 	trackNumberUpdateTime: number;
// 	subscribedCount: number;
// 	cloudTrackCount: number;
// 	ordered: boolean;
// 	description: string;
// 	tags: string[];
// 	updateFrequency?: any;
// 	backgroundCoverId: number;
// 	backgroundCoverUrl?: any;
// 	titleImage: number;
// 	titleImageUrl?: any;
// 	englishTitle?: any;
// 	officialPlaylistType?: any;
// 	copied: boolean;
// 	relateResType?: any;
// 	subscribers: Subscriber[];
// 	subscribed: boolean;
// 	creator: Creator;
// 	tracks: Track[];
// 	videoIds?: any;
// 	videos?: any;
// 	trackIds: TrackId[];
// 	bannedTrackIds?: any;
// 	mvResourceInfos?: any;
// 	shareCount: number;
// 	commentCount: number;
// 	remixVideo?: any;
// 	sharedUsers?: any;
// 	historySharedUsers?: any;
// 	gradeStatus: string;
// 	score?: any;
// 	algTags: string[];
// }
