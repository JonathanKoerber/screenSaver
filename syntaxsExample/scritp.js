const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

function buildFlipCards() {
	const panels = document.querySelectorAll('.tab-panel');

	panels.forEach((panel) => {
		const sections = panel.querySelectorAll('section');

		sections.forEach((section, index) => {
			const heading = section.querySelector('h2');
			const codeBlock = section.querySelector('pre');

			if (!heading || !codeBlock) {
				return;
			}

			const cardId = `${panel.id}-flip-${index + 1}`;
			const frontNote = document.createElement('p');
			frontNote.textContent = 'Click flip to view the code example on the back of this card.';

			const wrapper = document.createElement('div');
			wrapper.className = 'flip-card-wrapper';

			const card = document.createElement('div');
			card.className = 'flip-card';
			card.id = cardId;

			const front = document.createElement('div');
			front.className = 'flip-face flip-front';

			const back = document.createElement('div');
			back.className = 'flip-face flip-back';

			const backHeading = heading.cloneNode(true);
			const codeClone = codeBlock.cloneNode(true);

			const controls = document.createElement('div');
			controls.className = 'flip-controls';

			const flipToBackButton = document.createElement('button');
			flipToBackButton.type = 'button';
			flipToBackButton.className = 'flip-toggle';
			flipToBackButton.dataset.flipTarget = cardId;
			flipToBackButton.textContent = 'Flip For Code';

			const flipToFrontButton = document.createElement('button');
			flipToFrontButton.type = 'button';
			flipToFrontButton.className = 'flip-toggle';
			flipToFrontButton.dataset.flipTarget = cardId;
			flipToFrontButton.textContent = 'Back To Title';

			controls.append(flipToBackButton);
			front.append(heading, frontNote, controls);
			back.append(backHeading, codeClone, flipToFrontButton);

			card.append(front, back);
			wrapper.append(card);

			section.replaceWith(wrapper);
		});
	});
}

function showPanel(targetId) {
	tabPanels.forEach((panel) => {
		panel.classList.toggle('is-hidden', panel.id !== targetId);
	});

	tabButtons.forEach((button) => {
		const isActive = button.dataset.target === targetId;
		button.classList.toggle('is-active', isActive);
		button.setAttribute('aria-selected', String(isActive));
	});
}

tabButtons.forEach((button) => {
	button.addEventListener('click', () => {
		showPanel(button.dataset.target);
	});
});

buildFlipCards();

const flipButtons = document.querySelectorAll('.flip-toggle');

flipButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const targetId = button.dataset.flipTarget;
		const card = document.getElementById(targetId);

		if (!card) {
			return;
		}

		card.classList.toggle('is-flipped');
	});
});
