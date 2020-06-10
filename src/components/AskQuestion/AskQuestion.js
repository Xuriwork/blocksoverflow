import React from 'react';
import { useForm } from 'react-hook-form';

const AskQuestion = () => {
	const { register, handleSubmit } = useForm();

	const handlePostQuestion = (data) => {
		console.log(data);
	};

	return (
		<div className='ask-question-component'>
			<h1>Ask a question</h1>
			<div className='form-container'>
				<form
					className='question-form'
					onSubmit={handleSubmit(handlePostQuestion)}
				>
					<div>
						<label htmlFor='title'>Title</label>
						<p>Be as specific as you can be</p>
						<input
							type='text'
							name='title'
							id='title'
                            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
							ref={register({ required: true, maxLength: 300 })}
						/>
					</div>
					<div>
						<label htmlFor='body'>Body</label>
						<p>
							Include all the information someone would need to answer your
							question
						</p>
						<textarea id='body' name='body' ref={register({ required: true })}></textarea>
					</div>
					<div>
						<label htmlFor='tags'>Tags</label>
						<p>Add up to 5 tags to describe what your question is about</p>
						<input type='text' name='tags' ref={register({ required: true })} />
					</div>
					<div className='checkbox-container'>
						<input
							type='checkbox'
							name='answer-your-own-question'
							id='answer-your-own-question'
							ref={register}
						/>
						<label htmlFor='answer-your-own-question'>
							Answer your own question
						</label>
					</div>
					<button className='default-button'>Post your question</button>
				</form>
			</div>
		</div>
	);
};

export default AskQuestion;
