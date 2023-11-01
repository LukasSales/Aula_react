import styles from './NewTask.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'


export function NewTask() {


    const [comments, setComments] = useState(
        [
            '',
        ]
    );

    const [newCommentText, setNewCommentText] = useState('')

    function handleCreateNewComment(event:FormEvent){
        event.preventDefault(); //para evitar redirecionamento quando der submit

        setComments([...comments, newCommentText]);
        setNewCommentText(''); //setando para que limpe a textarea
    }

    function handleNewCommentChange(event:ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value); //adiciona o valor da textarea no newCommentText (setNewCommentText é uma função para atualizar o estado)
        
    }

    function handleNewCommentValid(event:InvalidEvent<HTMLTextAreaElement>) {
        event?.target.setCustomValidity('Esse campo é obrigatorio');
    }

    const isNewCommentInputEmpty = newCommentText.length == 0;

    return (
        <div className={styles.newTask}>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                
                <textarea 
                name='comment'
                placeholder='Adicione uma nova tarefa'
                value={newCommentText}
                onChange={handleNewCommentChange}
                onInvalid={handleNewCommentValid}
                required
                />

                <footer>
                    <button
                        type='submit' 
                        disabled={isNewCommentInputEmpty}>
                        Criar
                    </button>

                </footer>
            
            </form>

    
        </div>
        
    )
}