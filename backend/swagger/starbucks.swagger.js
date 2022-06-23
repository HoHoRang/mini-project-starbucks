/**
 * @swagger
 * /starbucks:
 *   get:
 *     summary: 커피 목록
 *     tags: [Starbucks]
 *     responses:
 *       200:
 *           description: 성공
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: 623d5bd1a19010434b413bd7
 *                     name:
 *                       type: string
 *                       example: 나이트로 바닐라 크림
 *                     img:
 *                       type: string
 *                       example: https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg
 *                     __v:
 *                       type: int
 *                       example: 0
 */
