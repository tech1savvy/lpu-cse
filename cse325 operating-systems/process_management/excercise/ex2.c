#include <stdio.h>
#include <unistd.h>

int main(){
	pid_t p1, p2, p3;
	p1 = fork();
	if(p1 == 0){
			printf("p1 pid: %d ppid: %d\n",getpid(), getppid());
			p2 = fork();
			if(p2 == 0){
					printf("p2 pid: %d ppid: %d\n",getpid(), getppid());
					p3 = fork();
					if(p3 == 0){
							printf("p3 pid: %d ppid: %d\n",getpid(), getppid());
					}
			}
	}
	return 0;
}