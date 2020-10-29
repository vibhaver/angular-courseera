import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared folder/feedback';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	feedbackForm: FormGroup;
	feedback: Feedback;
	contactType = ContactType;
	@ViewChild('fform') feedbackFormDirective;

	formErrors = {
		'firstname': '',
		'lastname': '',
		'telnum': '',
		'email': ''
	};

	validationMessages = {
		'firstname': {
			'required': 'First name is required.',
			'minlength': 'First name must be at least 2 char long.',
			'maxlength': 'First name cannot  be more than 25 char.'
		},
		'lastname': {
			'required': 'Last name is required.',
			'minlength': 'Last name must be at least 2 char long.',
			'maxlength': 'Last name cannot  be more than 25 char.'
		},
		'telnum': {
			'required': 'Tel num is required.',
			'pattern': 'tel num must contain only numbers.'

		},
		'email': {
			'required': 'Email is required.',
			'email': 'Email is invalid'
		}
	};

	constructor(private fb: FormBuilder) {
		this.createForm();

	}

	ngOnInit() {
	}
	createForm() {
		this.feedbackForm = this.fb.group({
			firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
			lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
			telnum: [0, [Validators.required, Validators.pattern]],
			email: ['', [Validators.required, Validators.email]],
			agree: false,
			contacttype: 'None',
			message: ''
		});

		this.feedbackForm.valueChanges
			.subscribe(data => this.onValueChanged(data));

		this.onValueChanged();                                       //(re) set form vaidation messages
	}

	onValueChanged(data?: any) {
		if (!this.feedbackForm) { return; }
		const form = this.feedbackForm;
		for (const field in this.formErrors) {
			if (this.formErrors.hasOwnProperty(field)) {
				// clear previous error message(if any)
				this.formErrors[field] = '';
				const control = form.get(field);
				if (control && control.dirty && !control.valid) {
					const messages = this.validationMessages[field];
					for (const key in control.errors) {
						if (control.errors.hasOwnPropert(key)) {
							this.formErrors[field] += messages[key] + ' ';
						}
					}
				}
			}
		}
	}
	onSubmit() {

		this.feedback = this.feedbackForm.value;
		console.log(this.feedback);
		this.feedbackForm.reset({
			firstname: '',
			lastname: "",
			telnum: 0,
			email: '',
			agree: false,
			contacttype: '',
			message: ''

		});
		this.feedbackFormDirective.resetForm();
	}
}
