package com.kakalog.main.AI;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.UUID;

import com.kakalog.main.KakalogApplication;
import com.kakalog.main.entity.ChatMessage;
import com.kakalog.main.entity.ChatResponse;
import org.json.JSONObject;
import org.springframework.boot.SpringApplication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WeChatAIApiClient {
    // API信息:AK和SK
    private static final String CLIENT_ID = "填入你的client_id";";
    private static final String CLIENT_SECRET = "填入你的client_secret";

        @PostMapping("/uploadMessage")
        public String uploadMessage(@RequestBody ChatMessage message) {
            String receivedMessage = message.getMessage();
            String userId = "88888"; // 用户ID
            String reply = unitChat(receivedMessage, userId);
            System.out.println(reply);
            System.out.println("收到消息：" + receivedMessage);
            // 可以在这里进行进一步处理，比如保存到数据库等操作
            ChatResponse chatResponse =new ChatResponse();
            chatResponse.setReply(reply);
            return chatResponse.getReply();
        }
//    public static void main(String[] args) {
//            System.out.println(unitChat("中国国土面积多大","88888"));
//    }

    public static String unitChat(String chatInput, String userId) {
        String chatReply = "不好意思，这个问题无法回答。"; // 默认回复

        try {
            // 获取access_token
            String accessToken = getAccessToken(CLIENT_ID, CLIENT_SECRET);

            // 根据access_token获取接口数据
            String unitChatbotUrl = "https://aip.baidubce.com/rpc/2.0/unit/bot/chat?access_token=" + accessToken;
            JSONObject postJson = new JSONObject();
            postJson.put("log_id", UUID.randomUUID().toString());
            postJson.put("bot_id", "1492868");
            JSONObject requestJson = new JSONObject();
            requestJson.put("query", chatInput);
            requestJson.put("user_id", userId);
            requestJson.put("query_info", new JSONObject().put("type", "TEXT"));
            postJson.put("request", requestJson);
            postJson.put("session_id", "");
            postJson.put("service_id", "S106734");
            postJson.put("version", "2.0");

            JSONObject responseJson = postRequest(unitChatbotUrl, postJson.toString());
            if (responseJson.getInt("error_code") != 0) return chatReply;

            // 解析聊天接口，返回数据结果
            JSONObject resultJson = responseJson.getJSONObject("result");
            responseJson = resultJson.getJSONObject("response");
            JSONObject actionListJson = responseJson.getJSONArray("action_list").getJSONObject(0);
            return actionListJson.getString("say");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return chatReply;
    }

    private static String getAccessToken(String clientId, String clientSecret) throws Exception {
        String tokenUrl = "https://aip.baidubce.com/oauth/2.0/token";
        String params = "grant_type=client_credentials&client_id=" + clientId + "&client_secret=" + clientSecret;
        JSONObject json = postRequest(tokenUrl, params);
        return json.getString("access_token");
    }

    private static JSONObject postRequest(String urlString, String params) throws Exception {
        URL url = new URL(urlString);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("POST");
        conn.setRequestProperty("Content-Type", "application/json");
        conn.setDoOutput(true);

        try (OutputStream os = conn.getOutputStream()) {
            byte[] input = params.getBytes("utf-8");
            os.write(input, 0, input.length);
        }

        StringBuilder response = new StringBuilder();
        try (BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream(), "utf-8"))) {
            String responseLine = null;
            while ((responseLine = br.readLine()) != null) {
                response.append(responseLine.trim());
            }
        }
        return new JSONObject(response.toString());
    }
}
