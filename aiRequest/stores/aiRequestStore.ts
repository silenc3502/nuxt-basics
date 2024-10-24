import { defineStore } from 'pinia';
import axiosInstance, {createAxiosInstances} from "../../utility/axiosInstance";

export const useAiRequestStore = defineStore('AiRequestStore', {
    state: () => ({
        boards: [] as Array<{ boardId: number; title: string; writer: string; regDate: string }>,
    }),

    actions: {
        async requestAiRequestToDjango() {
            const { djangoAxiosInst } = createAxiosInstances();

            try {
                const response = await djangoAxiosInst.get('/board/list');
                this.boards = response.data;
            } catch (error) {
                console.error('게시글 목록을 불러오는 중 오류가 발생했습니다:', error);
            }
        }
    }
});
