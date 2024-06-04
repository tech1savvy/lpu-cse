#include<stdio.h>
#include<stdlib.h>
#include<unistd.h>
#include<sys/wait.h>


int main(){
	pid_t  p1, p2, p3, p4, p5;
	p1 = fork();
	if(p1==0){
		printf("p1 pid: %d and ppid: %d\n",getpid(),getppid());
		p2 = fork();
		if(p2==0){
			printf("p2 pid: %d and ppid: %d\n",getpid(),getppid());
			p4 = fork();
			if(p4 == 0){
				printf("p4 pid: %d and ppid: %d\n",getpid(),getppid());
				p5 = fork();
				if(p5==0){
						printf("p5 pid: %d and ppid: %d\n",getpid(),getppid());
						return 0;
				}
				wait(NULL);
				return 0;
			}
			wait(NULL);
			return 0;
		}
		p3 = fork();
		if(p3==0){
			printf("p3 pid: %d and ppid: %d\n",getpid(),getppid());
			return 0;
		}
		wait(NULL);
		return 0;
	}
	return 0;
}