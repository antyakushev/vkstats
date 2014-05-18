var SYS = {
	VERSION: '4.2.1',
	APP_ID: 2045168,
	LOGIN_SETTING: 0 + 2048 + 4096,
	DEBUG: false,
	MESSAGES_TO_PROCESS_IN_DEBUG_MODE: 400,
	MESSAGES_PER_REQUEST: 1000,//100,
	MSEC_BETWEEN_REQUESTS: 333,
	MSEC_BETWEEN_REQUESTS_FOR_USERDATA: 1000,
	MAX_USERS_PER_REQUEST: 500,
	LINK_TO_CLUB: '/club21792535',
	TOO_MANY_REQUESTS_ERR_CODE: 6,
	MAX_USERS_AT_ONE_GRAPH: 3,
	FILES_TO_LOAD: ['mail.css','mail.js','ui_controls.js','ui_controls.css','common.js'],
	LANGUAGES: {
		0: {
			name: 'russian',
			strings: {
				authorizing: '�����������',
				authorized: '����������� ���������',
				loadingMessageNumbers: '����������� ����� ���������',
				fatal: '����������� ������. ����������, �������� ���������� ���� ������ ������������.',
				appName: '���������� ������ ���������',
				nameCol: '���',
				kbytes: '��������� ������ ���������',
				settingsText: '�������� �������� ���������',
				startButton: '�������!',
				verbose: '����������� ��� ��������',
				gettingNames: '�������� ��� �������������',
				numberOfMessagesCol: '����� ���������',
				sentCol: '����������',
				receivedCol: '��������',
				symbolsCol: '����� ��������',
				sentSymbolsCol: '���������� ��������',
				receivedSymbolsCol: '�������� ��������',
				lastMsgCol: '��������� ���������',
				processingMessages: '��������� ���������',
				done: '��������� ���������',
				messagesProcessed: '���������� ���������',
				incoming: '��������',
				outgoing: '���������',
				dayWithMostMessages: '������ ����� ��������� ����',
				timeWithMostMessages: '������ ����� ���������',
				thankYou: '�������, ��� ���������, ��������, ��� ���� ������!',
				exportByTime: '������� ���������� �� �������',
				exportByMessages: '������� ���������� �� ����������',
				warning: '��������! �� ������� ���������� ���������',
				friendsOnly: '��������� ������ ������',
				notFromChat: '�� ������� ��������� �� ����',
				withSelected: '���������',
				exportToNote: '�������������� � �������',
				ourGroup: '���� ������',
				noteSuccess: '������� ������� �������',
				noteFailure: '�� ������� ������� �������. ���������� ��� ��� �������.',
				seeNote: '����������',
				plotKbytesGraph: '��������� ������ �� ����� ��������',
				plotMessagesGraph: '��������� ������ �� ����� ���������',
				wantToPlotGraphs: '� ������ ������� ������� ������� �� �������',
				totalFirstName: '�����', 
				totalLastName: '����������',
				sortByKBytes: '����������� �� ����������',
				hideAvatars: '�� ���������� ���������� �������������'
			}
		},
		1: {
			name: 'ukrainian',
			strings: {
				authorizing: '�����������',
				authorized: '����������� ���������',
				loadingMessageNumbers: '���������� ������� ����������',
				settingsText: '������� ����� ���������',
				startButton: '������!',
				verbose: '�������� �� 䳿',
				fatal: '�������� �������. ���� �����, �������� ������� ����� ��� ����������.',
				appName: '���������� ������� ���������',
				nameCol: "��'�",
				numberOfMessagesCol: '������ ����������',
				kbytes: '����������� ����� ����������',
				gettingNames: '������������ ���� ������������',
				symbolsCol: '������ �������',
				sentSymbolsCol: '�� ��������� �������',
				receivedSymbolsCol: '�� �������� �������',
				sentCol: '�� ���������',
				receivedCol: '�� ��������',
				lastMsgCol: '������ �����������',
				messagesProcessed: '����������� ����������',
				processingMessages: '������� ����������',
				done: '������� ���������',
				incoming: '�����',
				outgoing: '��������',
				dayWithMostMessages: '�������� ���������� ����',
				timeWithMostMessages: '�������� ����������',
				thankYou: '������, �� ����������, ����������, ���� ���� ���������!',
				exportByTime: '������� ���������� �� �����',
				exportByMessages: '������� ���������� �� ������������',
				warning: '�����! �� ������� �������� ����������',
				friendsOnly: '����������� ����� �����',
				notFromChat: '�� �������� ����������� � ����',
				withSelected: '������',
				exportToNote: '������������ � ������',
				ourGroup: '���� �����',
				noteSuccess: '������ ������ ��������',
				noteFailure: '�� ������� �������� ������. ��������� �� ��� �����.',
				seeNote: '����������',
				plotKbytesGraph: '���������� ������ �� ������� �������',
				plotMessagesGraph: '���������� ������ �� ������� ����������',
				wantToPlotGraphs: '� ������ �������� ���� �������',
				totalFirstName: '��������', 
				totalLastName: '����������',
				sortByKBytes: 'C�������� �� ���������',
				hideAvatars: '�� ���������� ����������'
			}
		},
		3: {
			name: 'english',
			strings: {
				authorizing: 'Authorizing',
				authorized: 'Authorization complete',
				loadingMessageNumbers: 'Getting message numbers',
				fatal: 'Fatal error. Please, send the info below to the developers',
				appName: 'Private messages statistics',
				settingsText: 'Set your desired parameters',
				startButton: 'Start',
				verbose: 'Verbose mode',
				kbytes: 'Count message sizes as well',
				nameCol: 'Name',
				numberOfMessagesCol: 'Number of messages',
				gettingNames: 'Loading user names',
				sentCol: 'Sent',
				receivedCol: 'Received',
				symbolsCol: 'Total symbols',
				sentSymbolsCol: 'Sent symbols',
				receivedSymbolsCol: 'Received symbols',
				lastMsgCol: 'Last Message',
				messagesProcessed: 'Messages processed',
				processingMessages: 'Processing messages',
				done: 'Processing complete',
				incoming: 'incoming',
				outgoing: 'outgoing',
				dayWithMostMessages: 'Day with most messages',
				timeWithMostMessages: 'Time with most messages',
				thankYou: 'Thank you for your time, we hope it was worth it!',
				exportByTime: 'Export time statistics',
				exportByMessages: 'Export message statistics',
				warning: 'Warning! Failed to process messages',
				friendsOnly: 'Count only for friends',
				notFromChat: 'Do not count chat messages',
				withSelected: 'Selected',
				exportToNote: 'export to note',
				ourGroup: 'Our club',
				noteSuccess: 'Note created successfully',
				noteFailure: 'Failed to create a note. Please try again later',
				seeNote: 'See it',
				plotKbytesGraph: 'plot symbol number graph',
				plotMessagesGraph: 'plot message number graph',
				wantToPlotGraphs: 'I\'d like to plot fancy graphs',
				totalFirstName: 'Overall', 
				totalLastName: 'stats',
				sortByKBytes: 'Sort by kilobytes',
				hideAvatars: 'Hide user photos'
			}
		}
	},
	
	fatal: function(obj) {
		ui.setHeader(user.lang.fatal);
		ui.clearContent();
		var t = ce('textarea', {'cols': 80, 'rows': 20}, {fontFamily: 'Courier new'});
		t.innerHTML = obj;
		ui.appendContentElement(t);
		throw obj;
	},
	
	log: function(str) {
		str = formatDate(new Date(), true) + ': ' + str;
		var pane = ge('loggerPane');
		if(pane == undefined || pane == null) {
			ui.addLoggerPane();
			pane = ge('loggerPane');
		}
		pane.innerHTML += str + "\n";
		pane.scrollTop = pane.scrollHeight;
	}
};

var user = {
	lang: SYS.LANGUAGES[langConfig.id] == undefined ? SYS.LANGUAGES[3].strings : SYS.LANGUAGES[langConfig.id].strings,
	verbose: false,
	kbytes: true,
	friendsOnly: false,
	notFromChat: true,
	plotGraphs: true,
	sortByKBytes: false,
	hideAvatars:true
};