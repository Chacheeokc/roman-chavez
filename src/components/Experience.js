import React from 'react';

const Experience = () => {
    const jobs = [
        {
            name: 'Job 1',
            tasks: ['Task 1', 'Task 2', 'Task 3']
        },
        {
            name: 'Job 2',
            tasks: ['Task 1', 'Task 2', 'Task 3']
        },
        // Add more job objects as needed
    ];

    return (
        <div>
            <h2>Experience</h2>
            {jobs.map((job, index) => (
                <div key={index}>
                    <h3>{job.name}</h3>
                    <ul>
                        {job.tasks.map((task, taskIndex) => (
                            <li key={taskIndex}>{task}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Experience;