int shmid;
shmid = shmget(IPC_PRIVATE, 1024, IPC_CREAT | 0666);
shmat(shmid, NULL, 0);// null is the id of shared memory , so null means system will automatically pass the values