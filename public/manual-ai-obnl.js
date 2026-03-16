function setPromptTab(tabId) {
	document.querySelectorAll('.prompt-tab-btn').forEach(function(button) {
		button.classList.toggle('active', button.getAttribute('data-prompt-tab') === tabId);
	});

	document.querySelectorAll('.prompt-tab-panel').forEach(function(panel) {
		panel.classList.toggle('active', panel.id === 'panel-' + tabId);
	});

	document.querySelectorAll('.prompt-select-option').forEach(function(option) {
		option.classList.toggle('active', option.getAttribute('data-tab-id') === tabId);
	});

	var activeOption = document.querySelector('.prompt-select-option[data-tab-id="' + tabId + '"]');
	var label = document.getElementById('promptSelectLabel');
	if (activeOption && label) {
		label.textContent = activeOption.textContent || '';
	}
}

function getAuthBoxes() {
	return Array.prototype.slice.call(document.querySelectorAll('#authBoxes .auth-box'));
}

function getHeroButtonsPanel() {
	return document.getElementById('heroBtns');
}

function getTintClass(box) {
	if (!box) return 'tint-coral';
	if (box.classList.contains('sage')) return 'tint-sage';
	if (box.classList.contains('blue')) return 'tint-blue';
	if (box.classList.contains('lav')) return 'tint-lav';
	if (box.classList.contains('yellow')) return 'tint-yellow';
	return 'tint-coral';
}

function applyAuthorityState(activeBox) {
	var heroButtons = getHeroButtonsPanel();

	getAuthBoxes().forEach(function(box) {
		box.classList.toggle('auth-on', box === activeBox);
	});

	if (!heroButtons) return;

	heroButtons.classList.remove('tint-sage', 'tint-blue', 'tint-coral', 'tint-lav', 'tint-yellow');
	heroButtons.classList.add(getTintClass(activeBox));
}

function getActiveAuthorityBox() {
	var activeBox = document.querySelector('#authBoxes .auth-box.auth-on');
	if (activeBox instanceof HTMLElement) {
		return activeBox;
	}

	var firstBox = document.querySelector('#authBoxes .auth-box');
	return firstBox instanceof HTMLElement ? firstBox : null;
}

function closePromptDropdown() {
	var trigger = document.getElementById('promptSelectTrigger');
	var menu = document.getElementById('promptSelectMenu');

	if (trigger) {
		trigger.classList.remove('open');
	}

	if (menu) {
		menu.classList.remove('open');
	}
}

function togglePromptDropdown() {
	var trigger = document.getElementById('promptSelectTrigger');
	var menu = document.getElementById('promptSelectMenu');
	if (!trigger || !menu) return;

	var nextOpenState = !menu.classList.contains('open');
	trigger.classList.toggle('open', nextOpenState);
	menu.classList.toggle('open', nextOpenState);
}

function expandPrompt(expandButton) {
	var wrap = expandButton.previousElementSibling;
	if (!(wrap instanceof HTMLElement) || !wrap.classList.contains('codeish-wrap')) return;

	var nextTruncatedState = !wrap.classList.contains('truncated');
	wrap.classList.toggle('truncated', nextTruncatedState);
	expandButton.textContent = nextTruncatedState ? 'Reduire ↑' : 'Afficher le prompt complet ↓';
}

function copyPrompt(button) {
	var card = button.closest('.box');
	var code = card ? card.querySelector('.codeish') : null;
	if (!code) return;

	var text = code.innerText || code.textContent || '';
	var original = button.textContent || 'Copier le prompt';

	function showCopied() {
		button.textContent = 'Copie!';
		window.setTimeout(function() {
			button.textContent = original;
		}, 2000);
	}

	if (navigator.clipboard && navigator.clipboard.writeText) {
		navigator.clipboard.writeText(text).then(showCopied).catch(function() {});
		return;
	}

	var textarea = document.createElement('textarea');
	textarea.value = text;
	textarea.setAttribute('readonly', '');
	textarea.style.position = 'absolute';
	textarea.style.left = '-9999px';
	document.body.appendChild(textarea);
	textarea.select();

	try {
		document.execCommand('copy');
		showCopied();
	} catch (error) {
		// Ignore copy fallback failures.
	}

	document.body.removeChild(textarea);
}

function assessMaturity() {
	var worksheet = document.querySelector('#maturity .worksheet');
	if (!worksheet) return;

	var allItems = worksheet.querySelectorAll('.checks li');
	var checked = worksheet.querySelectorAll('.checks li.checked');
	var total = allItems.length;
	var score = checked.length;
	var pct = total ? Math.round((score / total) * 100) : 0;
	var label = 'Usage manuel et ponctuel';

	if (score > 12) {
		label = "Opérations pleinement intégrées à l'IA";
	} else if (score > 8) {
		label = "Flux de travail d'IA intégrés";
	} else if (score > 4) {
		label = 'Adoption basée sur des outils';
	}

	var resultEl = document.getElementById('assessResult');
	if (!resultEl) return;

	resultEl.style.display = 'block';
	resultEl.innerHTML =
		'<div class="assess-result">' +
		'<div class="assess-level">' + label + '</div>' +
		'<div class="assess-score">' + score + ' sur ' + total + ' (' + pct + '%)</div>' +
		'<div class="assess-bar"><div class="assess-fill" style="width:' + pct + '%;background:rgba(207,226,246,.8);"></div></div>' +
		'</div>';
}

function activateHeroPrompt(button) {
	var heroButtons = Array.prototype.slice.call(document.querySelectorAll('#heroBtns .hero-btn'));
	var buttonIndex = heroButtons.indexOf(button);
	var tabIds = [
		'prompt-fundraising',
		'prompt-grants',
		'prompt-programs',
		'prompt-finance',
		'prompt-governance',
		'prompt-volunteers',
		'prompt-comms',
		'prompt-hr'
	];
	var tabId = tabIds[buttonIndex];
	if (!tabId) return;

	setPromptTab(tabId);
	closePromptDropdown();

	var target = document.getElementById('promptSelectWrap') || document.getElementById('prompts');
	if (target) {
		target.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}
}

document.addEventListener('click', function(event) {
	var target = event.target;
	var selectedText = window.getSelection && String(window.getSelection()).trim();
	if (selectedText) return;

	var promptSelectWrap = document.getElementById('promptSelectWrap');
	if (
		promptSelectWrap &&
		target instanceof Element &&
		!target.closest('#promptSelectWrap') &&
		!target.closest('#promptSelectMenu')
	) {
		closePromptDropdown();
	}

	var promptSelectTrigger = target instanceof Element ? target.closest('.prompt-select-trigger') : null;
	if (promptSelectTrigger instanceof HTMLElement) {
		event.preventDefault();
		togglePromptDropdown();
		return;
	}

	var promptTabButton = target instanceof Element ? target.closest('.prompt-tab-btn') : null;
	if (promptTabButton instanceof HTMLElement) {
		event.preventDefault();
		var promptTabId = promptTabButton.getAttribute('data-prompt-tab');
		if (promptTabId) setPromptTab(promptTabId);
		return;
	}

	var promptOption = target instanceof Element ? target.closest('.prompt-select-option') : null;
	if (promptOption instanceof HTMLElement) {
		event.preventDefault();
		var optionTabId = promptOption.getAttribute('data-tab-id');
		if (optionTabId) setPromptTab(optionTabId);
		closePromptDropdown();
		return;
	}

	var heroButton = target instanceof Element ? target.closest('#heroBtns .hero-btn') : null;
	if (heroButton instanceof HTMLElement) {
		event.preventDefault();
		activateHeroPrompt(heroButton);
		return;
	}

	var collapsibleHeader = target instanceof Element ? target.closest('.collapsible-area-header') : null;
	if (collapsibleHeader instanceof HTMLElement) {
		event.preventDefault();
		collapsibleHeader.classList.toggle('open');
		var content = collapsibleHeader.nextElementSibling;
		if (content instanceof HTMLElement) {
			content.classList.toggle('open');
		}
		return;
	}

	var expandButton = target instanceof Element ? target.closest('.prompt-expand-btn') : null;
	if (expandButton instanceof HTMLElement) {
		event.preventDefault();
		expandPrompt(expandButton);
		return;
	}

	var copyButton =
		target instanceof Element ? target.closest('.prompt-controls .btn-small') : null;
	if (copyButton instanceof HTMLElement) {
		event.preventDefault();
		copyPrompt(copyButton);
		return;
	}

	var assessButton = target instanceof Element ? target.closest('.assess-btn') : null;
	if (assessButton instanceof HTMLElement) {
		event.preventDefault();
		assessMaturity();
		return;
	}

	var item = target instanceof Element ? target.closest('.checks li') : null;
	if (!item) return;

	event.preventDefault();
	item.classList.toggle('checked');

	var list = item.parentElement;
	if (!list) return;

	var items = Array.prototype.slice.call(list.children);
	var index = items.indexOf(item);
	var section = item.closest('section');
	var sectionId = section && section.id ? section.id : 'x';
	var key = 'cb_' + sectionId + '_' + index;

	try {
		localStorage.setItem(key, String(item.classList.contains('checked')));
	} catch (error) {
		// Ignore localStorage failures.
	}
});

document.addEventListener('DOMContentLoaded', function() {
	var activeButton = document.querySelector('.prompt-tab-btn.active');
	var firstButton = document.querySelector('.prompt-tab-btn');
	var initialTabId = null;

	if (activeButton) {
		initialTabId = activeButton.getAttribute('data-prompt-tab');
	} else if (firstButton) {
		initialTabId = firstButton.getAttribute('data-prompt-tab');
	}

	if (initialTabId) {
		setPromptTab(initialTabId);
	}

	applyAuthorityState(getActiveAuthorityBox());

	document.querySelectorAll('#heroBtns .hero-btn').forEach(function(button) {
		button.setAttribute('href', '#prompts');
	});

	document.querySelectorAll('.checks li').forEach(function(item, index) {
		var section = item.closest('section');
		var sectionId = section && section.id ? section.id : 'x';
		var key = 'cb_' + sectionId + '_' + index;

		try {
			if (localStorage.getItem(key) === 'true') {
				item.classList.add('checked');
			}
		} catch (error) {
			// Ignore localStorage failures.
		}
	});

	getAuthBoxes().forEach(function(box) {
		box.addEventListener('click', function() {
			applyAuthorityState(box);
		});

		box.addEventListener('mouseenter', function() {
			applyAuthorityState(box);
		});

		box.addEventListener('mouseleave', function() {
			applyAuthorityState(getActiveAuthorityBox());
		});
	});
});
