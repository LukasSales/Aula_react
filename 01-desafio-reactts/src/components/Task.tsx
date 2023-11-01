import clipBoard from '../assets/Clipboard.svg';

import { useState } from 'react';
import { NewTask } from './NewTask';

import styles from './Task.module.css';


export function Task ( ) {

    const [taskCriadasCount, setTaskCriadasCount] = useState(0);
    const [taskConcluidasCount, setTarefasConcluidasCount] = useState(0);

    return (
        <div className={styles.taskDiv}>
            <div className={styles.task}>
                <header>
                    <p className={styles.tarefasCriadas}>Tarefas criadas<span>{taskCriadasCount}</span></p>
                    <p className={styles.tarefasConcluidas}>Concluidas<span>{taskConcluidasCount}</span></p>
                </header>
                <main>
                    <img src={clipBoard} alt="ClipBoard" />
                        
                    <div className={styles.conteudo}>
                    <p className={styles.primeiroParagrafo}>Você ainda não tem tarefas cadastradas</p>
                    <p className={styles.segundoParagrafo}>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                </main>
            </div>  
        </div>
    );
}