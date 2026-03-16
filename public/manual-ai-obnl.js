const setPromptTab = (tabId) => {
	document.querySelectorAll('.prompt-tab-btn').forEach((button) => {
		button.classList.toggle('active', button.getAttribute('data-prompt-tab') === tabId);
	});

	document.querySelectorAll('.prompt-tab-panel').forEach((panel) => {
		panel.classList.toggle('active', panel.id === `panel-${tabId}`);
	});

	document.querySelectorAll('.prompt-select-option').forEach((option) => {
		option.classList.toggle('active', option.getAttribute('data-tab-id') === tabId);
	});

	const activeOption = document.querySelector(`.prompt-select-option[data-tab-id="${tabId}"]`);
	const label = document.getElementById('promptSelectLabel');
	if (activeOption && label) {
		label.textContent = activeOption.textContent ?? '';
	}
};

document.addEventListener('click', (event) => {
	const selectedText = window.getSelection && String(window.getSelection()).trim();
	if (selectedText) return;

	const promptTabButton =
		event.target instanceof Element ? event.target.closest('.prompt-tab-btn') : null;
	if (promptTabButton instanceof HTMLElement) {
		event.preventDefault();
		const tabId = promptTabButton.getAttribute('data-prompt-tab');
		if (tabId) setPromptTab(tabId);
		return;
	}

	const promptOption =
		event.target instanceof Element ? event.target.closest('.prompt-select-option') : null;
	if (promptOption instanceof HTMLElement) {
		event.preventDefault();
		const tabId = promptOption.getAttribute('data-tab-id');
		if (tabId) setPromptTab(tabId);
		return;
	}

	const collapsibleHeader =
		event.target instanceof Element ? event.target.closest('.collapsible-area-header') : null;
	if (collapsibleHeader instanceof HTMLElement) {
		event.preventDefault();
		collapsibleHeader.classList.toggle('open');
		const content = collapsibleHeader.nextElementSibling;
		if (content instanceof HTMLElement) {
			content.classList.toggle('open');
		}
		return;
	}

	const expandButton =
		event.target instanceof Element ? event.target.closest('.prompt-expand-btn') : null;
	if (expandButton instanceof HTMLElement) {
		event.preventDefault();
		const wrap = expandButton.previousElementSibling;
		if (wrap instanceof HTMLElement && wrap.classList.contains('codeish-wrap')) {
			const nextTruncatedState = !wrap.classList.contains('truncated');
			wrap.classList.toggle('truncated', nextTruncatedState);
			expandButton.textContent = nextTruncatedState ? 'Reduire ↑' : 'Afficher le prompt complet ↓';
		}
		return;
	}

	const item = event.target instanceof Element ? event.target.closest('.checks li') : null;
	if (!item) return;

	event.preventDefault();
	item.classList.toggle('checked');

	const list = item.parentElement;
	if (!list) return;

	const items = Array.from(list.children);
	const index = items.indexOf(item);
	const section = item.closest('section');
	const key = `cb_${section?.id || 'x'}_${index}`;

	try {
		localStorage.setItem(key, String(item.classList.contains('checked')));
	} catch {}
});

document.addEventListener('DOMContentLoaded', () => {
	const activeButton = document.querySelector('.prompt-tab-btn.active');
	const initialTabId =
		activeButton?.getAttribute('data-prompt-tab') ??
		document.querySelector('.prompt-tab-btn')?.getAttribute('data-prompt-tab');

	if (initialTabId) {
		setPromptTab(initialTabId);
	}
});
